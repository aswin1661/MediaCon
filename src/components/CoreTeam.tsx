import { For, onCleanup, onMount } from "solid-js";
import { gsap } from "gsap";
import port from "../assets/port 2.jpg";
import port2 from "../assets/port.jpg";
import port3 from "../assets/port 3.jpg";
import { TextCombo } from "./header";

const List = [
  {
    image: port,
    link: ""
  }, {
    image: port2,
    link: ""
  }, {
    image: port3,
    link: ""
  }
];

const CoreTeam = () => {
  let containerRef: HTMLDivElement | undefined;
  let headingRef: HTMLHeadingElement | undefined;
  let subheadingRef: HTMLParagraphElement | undefined;
  let imageRefs: HTMLImageElement[] = [];

  onMount(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.fromTo([headingRef, subheadingRef], { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 });
    tl.fromTo(imageRefs, { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.5");
    onCleanup(() => {
      tl.kill();
    });
  });

  return (
    <section ref={containerRef!}  class="min-h-screen
     relative  flex flex-col items-start justify-center gap-10">
      <h1  class="absolute text-yellow-500  inset-0 text-[45rem] text-center top-0 pointer-events-none cal-sans blur-lg">
      μ
      </h1>
      <TextCombo theme="white" header=" Lorem." sub="lorem ipsum is a text" />
      <div class="flex flex-wrap ms:gap-4 justify-center items-center mx-auto z-0">
        <For each={List}>
          {(item, index) => (
            <a href={item.link}>
              <div class="flex-1 max-w-[50px] min-w-[200px] sm:max-w-[300px] ">
                <img
                  ref={(el) => (imageRefs[index()] = el)}
                  src={item.image}
                  alt={`Organizer ${index() + 1}`}
                  class="w-full h-auto aspect-square p-5 sm:aspect-auto object-contain sm:object-cover shadow-lg hover:scale-105 hover:rounded-xl duration-300"
                />
              </div>
            </a>
          )}
        </For>
      </div>
    </section>
  );
};

export default CoreTeam;
