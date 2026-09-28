export async function fetchPostPreviews() {
  const spaceId = process.env.CONTENTFUL_SPACEID;
  const accessToken =
    process.env.CONTENTFUL_CONTENT_DELYVARY_ACCESS_TOKEN;

  // Check required environment variables
  if (!spaceId) {
    console.error("Missing CONTENTFUL_SPACEID environment variable.");
    return [];
  }

  if (!accessToken) {
    console.error(
      "Missing CONTENTFUL_CONTENT_DELYVARY_ACCESS_TOKEN environment variable."
    );
    return [];
  }

  try {
    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              postCollection(order: published_DESC) {
                items {
                  title
                  slug
                  published

                  thumbnail {
                    url
                  }

                  author {
                    name
                  }

                  postDescription {
                    json
                  }
                }
              }
            }
          `,
        }),
        cache: "no-store",
      }
    );

    // Check HTTP response
    if (!res.ok) {
      console.error(
        `Contentful request failed: ${res.status} ${res.statusText}`
      );

      return [];
    }

    const result = await res.json();

    // Check GraphQL errors
    if (result.errors) {
      console.error(
        "Contentful GraphQL errors:",
        JSON.stringify(result.errors, null, 2)
      );

      return [];
    }

    // Safely access postCollection
    const posts = result?.data?.postCollection?.items ?? [];

    return posts;
  } catch (error) {
    console.error("Error fetching posts from Contentful:", error);

    return [];
  }
}

export default fetchPostPreviews;