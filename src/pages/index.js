import Image from "next/image";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/Layout/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ClientLayout>Hello</ClientLayout>;
}
