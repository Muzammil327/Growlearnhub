import Container from "@/src/components/element/container";
import style from "./SubHeader.module.css";

export default function SubHeader(props: { title: string }) {
  return (
    <section
      className="py-12 relative z-0 overflow-hidden bg-cover bg-no-repeat md:bg-fixed bg-center overlay"
      style={{
        backgroundImage: 'url("/bg_3.jpg.webp")',
      }}
      data-stellar-background-ratio="0.5"
    >
      {" "}
      <Container>
        <div className={`pt-8 ${style.hero}`}>
          <div className={style.bg1} aria-hidden="true">
            <div className={style.icon} />
          </div>
          <div className="mx-auto py-8 sm:py-20 md:py-32">
            <div className="md:text-center text-left mt-4">
              <h1 className="tw">{props.title}</h1>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
