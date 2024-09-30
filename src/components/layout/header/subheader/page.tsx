import Container from "@/src/components/element/container"
import { Heading1 } from "@/src/components/ui/Heading"

export default function SubHeader(props: { title: string }) {
  return (
    <section className="py-12 relative z-0 overflow-hidden bg-cover bg-no-repeat md:bg-fixed bg-center overlay">
      <Container>
        <div className="pt-8 relative isolate">
          <div className="mx-auto py-8 sm:py-20 md:py-32">
            <div className="md:text-center text-left mt-4">
              <Heading1 variant="white">{props.title}</Heading1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
