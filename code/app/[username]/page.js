import React from "react";
import Paymentpage from "../components/Paymentpage";
import { notFound } from "next/navigation";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

const UserName = async ({ params }) => {
  const checkUser = async () => {
    await connectDb();
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
  };

  await checkUser();

  return (
    <>
      <Paymentpage username={params.username} />
    </>
  );
};

export default UserName;

export async function generateMetadata({ params }) {
  return {
    title: `${params.username} - Get Me A Chai`,
  };
}
