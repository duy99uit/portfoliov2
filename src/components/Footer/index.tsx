import { Links } from "@/config/constant";
import { useRouter } from "next/router";

const Footer = (props: any) => {
  const router = useRouter();
  const openNewPage = (link: string) => {
    // router.push(link);
    window.open(link, "_blank");
  };
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 relative">
      {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-500"></div> */}
      <div className="container px-4 py-8 mx-auto ">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            © Copyright {new Date().getFullYear()}. Designed by Duy.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            {[
              { name: "Duy's blog", link: Links.duyBlog },
              { name: "Linkedin", link: Links.linkedin },
            ].map((item) => {
              return (
                <p
                  key={item.name}
                  onClick={() => {
                    openNewPage(item.link);
                  }}
                  className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                  aria-label="Reddit"
                >
                  {item.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
