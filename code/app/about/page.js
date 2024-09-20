import React from "react";

const About = () => {
  return (
    <div className="">
      {/* Header */}
      <header className="container mx-auto px-4 py-8 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold ">About Get Me A Chai</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="sm:rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-500 text-lg mb-6">
                At Chai, we believe in supporting creators and giving them the
                freedom to create without limits. Our platform enables creators
                to build direct connections with their most loyal fans by
                providing them with financial support, so they can continue
                producing the content they love.
              </p>

              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                How it Works
              </h2>
              <p className="text-gray-500 text-lg mb-6">
                Chai allows creators to offer exclusive content to their
                supporters, whether it’s behind-the-scenes content, early access
                to projects, or anything else they want to share. Supporters can
                subscribe to their favorite creators by pledging a small monthly
                amount.
              </p>

              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                Join the Community
              </h2>
              <p className="text-gray-500 text-lg">
                Whether you’re a creator looking for support or a fan eager to
                help, Chai makes it easy to join a community built on creativity
                and passion. Sign up today and start supporting your favorite
                creators!
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
};

export default About;

export const metadata = {
  title: "About - Get Me A Chai",
};
