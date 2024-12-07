import { DynamicBreadcrumb } from "@/src/components/elements/Breadcrumb";
import Container from "@/src/components/elements/Container";
import Heading1 from "@/src/components/ui/typography/Heading1/page";

export default function SubHeader(props: { title: string }) {
  return (
    <section className="overlay relative z-0 overflow-hidden bg-stone-50 bg-cover bg-center bg-no-repeat pb-4 pt-12 dark:bg-stone-950 md:bg-fixed">
      <Container>
        <div className="relative isolate pt-8">
          <div className="mx-auto py-8 sm:py-20 md:py-32">
            <div className="mt-4 text-left capitalize text-primary md:text-center">
              <Heading1 variant="black">{props.title}</Heading1>
            </div>
          </div>
        </div>
      </Container>
      <DynamicBreadcrumb />
    </section>
  );
}
