import { GetUsers } from "./actions";
import QuizClient from "./QuizClient";

interface ProductDetail {
  slug: string;
}

interface PageProps {
  params: Promise<ProductDetail>;
}

// This function fetches the quiz data and renders the page
export default async function QuizPage({ params }: PageProps) {
  const slug = (await params).slug;
  const data = await GetUsers(slug);

  return <QuizClient quizData={data} />
}

// // Function to sanitize HTML description (strip any tags)
function sanitizeDescription(description: string) {
  return description.replace(/<\/?[^>]+(>|$)/g, ''); // Removes HTML tags
}

export async function generateMetadata({ params }: PageProps) {
  const slug = (await params).slug;

  try {
    const data = await GetUsers(slug);

    const keywords = (() => {
      if (typeof data.tags === 'string') {
        try {
          // Try to parse as JSON if tags is a string
          const parsed = JSON.parse(data.tags);
          if (Array.isArray(parsed)) {
            return parsed.join(', ');
          }
        } catch {
          // If parsing fails, assume it's a comma-separated string
          return data.tags.split(',').map((tag: string) => tag.trim()).join(', ');
        }
      } else if (Array.isArray(data.tags)) {
        // If tags is already an array, join it into a string
        return data.tags.join(', ');
      }
      // Fallback if no valid tags
      return '';
    })();

    const question = data.question;
    const explanation = data.explanation;

    let title;
    let description;

    if (question.length > 45) {
      title = question;
    } else {
      title = (question + " " + keywords).substring(0, 50);
    }

    if (explanation.length > 120) {
      description = sanitizeDescription(explanation);
    } else {
      description = sanitizeDescription(explanation.length > 120 ? " " + explanation.substring(0, 120) : explanation) + " " + keywords + " " + question;
    }

    return {
      title: title,
      description: description,
      keywords: keywords,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/mcqs-point/${slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      openGraph: {
        title: title,
        description: description,
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/mcqs-point/${slug}`,
        images: [
          {
            alt: title,
          },
        ],
      },
      twitter: {
        title: title,
        description: description,
        images: {
          alt: title,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      title: "Error",
      description: "Unable to fetch product data",
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/mcqs-point/${slug}`,
      },
      robots: {
        index: false,
        follow: false,
      },
      openGraph: {
        title: "Error",
        description: "Unable to fetch product data",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/mcqs-point/${slug}`,
        images: [
          {
            url: "/default-error-image.jpg",
            alt: "Error",
          },
        ],
      },
      twitter: {
        title: "Error",
        description: "Unable to fetch product data",
        images: {
          url: "/default-error-image.jpg",
          alt: "Error",
        },
      },
    };
  }
}