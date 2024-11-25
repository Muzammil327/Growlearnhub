import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";

function formatSegment(segment: string): string {
    return segment
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
}

export function DynamicBreadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean); // Remove empty segments

    const segmentCount = segments.length;

    // Define first segment, last segment and ellipsis display logic
    const firstSegment = segments[0];
    const lastSegment = segments[segmentCount - 1];
    const middleSegments = segments.slice(1, segmentCount - 1); // Middle segments excluding first and last

    const shouldShowEllipsis = segmentCount > 3;

    return (
        <Breadcrumb className="border-t px-8 pt-4">
            <BreadcrumbList>
                {/* "Home" always displayed */}
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Home</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Display first segment */}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={`/${firstSegment}`}>
                            {formatSegment(firstSegment)}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* If there are more than 3 segments, show ellipsis */}
                {shouldShowEllipsis && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                    </>
                )}

                {/* Display middle segments if needed (only for more than 3 segments) */}
                {middleSegments.length > 0 && !shouldShowEllipsis && (
                    middleSegments.map((segment, index) => (
                        <React.Fragment key={index}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={`/${segments.slice(0, index + 2).join("/")}`}>
                                        {formatSegment(segment)}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))
                )}

                {/* Display last segment */}
                {segmentCount > 1 && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                {formatSegment(lastSegment)}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
