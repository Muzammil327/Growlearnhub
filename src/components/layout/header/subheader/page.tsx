import Container from "@/src/components/ui/Container"
import Heading1 from "@/src/components/ui/typography/Heading1/page"

export default function SubHeader(props: { title: string }) {
  return (
    <section className="py-12 relative z-0 overflow-hidden bg-cover bg-no-repeat md:bg-fixed bg-center overlay bg-color1">
      <Container>
        <div className="pt-8 relative isolate">
          <div className="mx-auto py-8 sm:py-20 md:py-32">
            <div className="md:text-center text-left mt-4 capitalize">
              <Heading1 variant="white">{props.title}</Heading1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
