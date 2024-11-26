"use client";
import React from "react";
import SubHeader from "@/src/components/layout/header/subheader/page";
// import Sidebar from "@/src/components/ui/sidebar/page";
import Container from "./Container";
import { ImageContainerLoading } from "./ImageContainer";
import CommentForm from "../forms/CommentForm/page";


interface Iprops {
    data: {
        title: string;
        image?: string;
        canonical: string;
        url: string;
    };
    children?: React.ReactNode;
}

export default function SimpleWrapper({ data, children }: Iprops) {
    return (
        <React.Fragment>
            <main>
                <SubHeader title={data.title} />
                <Container>
                    <div className="grid grid-cols-1 md:gap-6 lg:grid-cols-11">
                        <div className="col-span-1 lg:col-span-8">
                            {/* <BreadCrumb breadcrumbs={data.breadcrumbs} /> */}
                            {data.image && (
                                <ImageContainerLoading
                                    image={`${data.image}`}
                                    title={data.title}
                                    class="my-4"
                                    height={720}
                                    width={1280}
                                    priority
                                />
                            )}
                            {children}
                            <CommentForm url={`https://growlearnhub.com${data.canonical}`} />
                        </div>
                        <aside className="col-span-1 lg:col-span-3">
                            {/* <Sidebar title={data.title} url={data.url} /> */}
                        </aside>
                    </div>
                </Container>
            </main>
        </React.Fragment>
    );
}
