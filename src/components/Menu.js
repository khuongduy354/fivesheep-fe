import * as React from "react";
import { supabase } from "../helper/supabase";

const libraryData = [
  { id: 1, title: "Library Item 1" },
  { id: 2, title: "Library Item 2" },
  { id: 3, title: "Library Item 3" },
  { id: 4, title: "Library Item 4" },
  { id: 5, title: "Library Item 5" },
];

const communityData = [
  { id: 1, title: "Community Item 1" },
  { id: 2, title: "Community Item 2" },
  { id: 3, title: "Community Item 3" },
  { id: 4, title: "Community Item 4" },
  { id: 5, title: "Community Item 5" },
];

const Header = () => {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  React.useEffect(() => {
    supabase.auth.getUser().then((res) => {
      setIsSignedIn(res.data.user ? true : false);
    });
  }, []);
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event == "SIGNED_IN") {
      setIsSignedIn(true);
      const user = session.user;

      // const { data } = await supabase.from("User").select().eq("id", user.id);
      if (true) {
        const { error } = await supabase.rpc("create_user", {
          useremail: user.email,
          userid: user.id,
        });

        if (error) {
          console.log(error);
        } else {
          console.log("User created successfully");
        }
      } else {
        console.log("User already exists");
      }
    } else if (event == "SIGNED_OUT") {
      setIsSignedIn(false);
    }
  });
  const signInGG = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };
  return (
    <header className="flex gap-5 justify-between items-start self-center w-full font-bold text-center max-w-[1322px] max-md:flex-wrap max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f46386ea1ac5f8fc69acd2503c44b051a9fe3b3579a6b844a57ef096555504?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
        alt="Logo"
        className="shrink-0 w-6 aspect-square"
      />
      <nav className="flex gap-5 max-md:flex-wrap">
        <div className="flex flex-auto gap-5 justify-between self-start px-5 text-2xl text-violet-600 max-md:flex-wrap max-md:max-w-full">
          <a href="#">Lớp học</a>
          <a href="#">Thư viện</a>
          <a href="#">Cộng đồng</a>
          <a href="#">Phụ huynh</a>
        </div>
        <div
          onClick={async () => {
            if (isSignedIn) {
              await supabase.auth.signOut();
            } else {
              signInGG();
            }
          }}
          className="justify-center px-5 py-2.5 text-xs text-white bg-violet-600 rounded-[30px]"
        >
          {isSignedIn ? "Đăng xuất" : "Đăng nhập"}
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="mt-44 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75b26b579d3ddef6ae289efdcc83a3d974929bd1b3e878f25617579a709a9665?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
            alt="Hero Image"
            className="grow w-full aspect-[1.41] max-md:max-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center px-5 mt-24 text-8xl font-black text-right text-violet-600 leading-[100px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
            <h1 className="self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
              Trường học <br /> An toàn mạng
            </h1>
            <div className="shrink-0 mt-9 max-w-full bg-white border border-violet-600 border-solid h-[50px] rounded-[50px] w-[329px]" />
            <div className="shrink-0 mt-5 max-w-full bg-white border border-violet-600 border-solid h-[50px] rounded-[50px] w-[329px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceButton = () => {
  return (
    <div className="flex gap-0 self-center mt-7 max-w-full w-[336px]">
      <div className="flex flex-col justify-center items-center px-9 bg-violet-600 rounded-full border-white border-solid border-[10px] h-[92px] stroke-[10px] w-[92px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8645c52604ab7ed51f2885d7173f07c57c236f5ab6d07ef6444ca5b843c6e840?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
          alt="Experience Icon"
          className="w-6 aspect-square"
        />
      </div>
      <button className="grow justify-center items-start self-start px-11 py-3.5 mt-5 text-2xl font-bold text-center text-violet-600 bg-white border border-violet-600 border-solid rounded-[50px] w-fit max-md:px-5">
        Trải nghiệm ngay
      </button>
    </div>
  );
};

const LibrarySection = () => {
  return (
    <section className="flex flex-col pl-14 mt-28 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-black text-violet-600 max-md:max-w-full max-md:text-4xl">
        Thư viện trường học
      </h2>
      <div className="flex overflow-x-auto gap-5 justify-between mt-10 max-md:flex-wrap max-md:max-w-full">
        {libraryData.map((item) => (
          <article
            key={item.id}
            className="shrink-0 max-w-full border border-violet-600 border-solid bg-zinc-300 h-[258px] rounded-[30px] w-[482px]"
          >
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

const CommunitySection = () => {
  return (
    <section className="flex flex-col pl-14 mt-28 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-28 text-5xl font-black text-violet-600 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Hoạt động cộng đồng nổi bật
      </h2>
      <div className="flex overflow-x-auto gap-5 justify-between mt-10 max-md:flex-wrap max-md:max-w-full">
        {communityData.map((item) => (
          <article
            key={item.id}
            className="shrink-0 max-w-full border border-violet-600 border-solid bg-zinc-300 h-[258px] rounded-[30px] w-[482px]"
          >
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};

const SignupSection = () => {
  return (
    <section className="self-center pr-20 mt-56 max-w-full bg-violet-600 bg-opacity-50 rounded-[30px] w-[1256px] max-md:pr-5 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-20 mt-0 text-2xl min-h-[790px] text-neutral-400 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/214a92561263d782e38655c078a076ff4f4b1d883e453d0e9d82f573da7e71e1?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt="Background"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-16 max-w-full w-[494px] max-md:mt-10">
              <h2 className="self-center text-5xl font-black text-center text-white max-md:max-w-full max-md:text-4xl">
                Đăng ký tài khoản
              </h2>
              <form>
                <label htmlFor="lastName" className="sr-only">
                  Họ
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Họ"
                  aria-label="Họ"
                  className="justify-center items-start px-14 py-6 mt-20 max-w-full whitespace-nowrap bg-white rounded-[40px] w-[237px] max-md:px-5 max-md:mt-10"
                />
                <label htmlFor="email" className="sr-only">
                  Địa chỉ email
                </label>
                <div className="flex gap-2.5 px-16 py-5 mt-7 bg-white rounded-[40px] max-md:flex-wrap max-md:px-5">
                  <input
                    type="email"
                    id="email"
                    placeholder="Địa chỉ email"
                    aria-label="Địa chỉ email"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b928d62d83bbb008808c366e2bc2663bfb7bee2276d15ab4475fb9453c4bd58f?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
                    alt=""
                    className="shrink-0 self-start w-2.5 aspect-square"
                  />
                </div>
                <label htmlFor="phone" className="sr-only">
                  Số điện thoại
                </label>
                <div className="flex gap-2 px-16 py-5 mt-7 bg-white rounded-[40px] max-md:flex-wrap max-md:px-5">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Số điện thoại"
                    aria-label="Số điện thoại"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/43fe10deccae50d5f2faf6b64db90db9e7a22b80454c4e13810d79d31d30f13b?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
                    alt=""
                    className="shrink-0 self-start w-2.5 aspect-square"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-3 self-stretch px-16 py-6 my-auto w-full text-2xl whitespace-nowrap bg-white rounded-[40px] text-neutral-400 max-md:px-5 max-md:mt-10">
            <label htmlFor="firstName" className="sr-only">
              Tên
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Tên"
              aria-label="Tên"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7704566fedaff45da7656d16a0475724328699e7521b0c832243943de8f35cf2?apiKey=c7cedd2849df4eb1b7f55f128f5c00ae&"
              alt=""
              className="shrink-0 self-start w-2.5 aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="items-start pt-10 pr-16 pb-44 pl-24 mt-80 w-full text-2xl font-bold text-violet-600 bg-zinc-300 max-md:pr-5 max-md:pb-10 max-md:pl-8 max-md:mt-10 max-md:max-w-full">
      Liên hệ với chúng tôi
    </footer>
  );
};

export function Menu() {
  return (
    <div className="flex flex-col pt-12 bg-white border border-black border-solid">
      <Header />
      <main>
        <Hero />
        <ExperienceButton />
        <LibrarySection />
        <CommunitySection />
        <SignupSection />
      </main>
      <Footer />
    </div>
  );
}
