import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">
        {" "}
        prompt app is an Open source AI prompting tool for modern world to
        discover, create and s and share everything
      </p>
      <Feed />
    </section>
  );
};

export default Home;
