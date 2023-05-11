import { NextResponse } from "next/server";
const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Sed Eget Nulla",
    slug: "sed-eget-nulla",
    content: "Sed eget nulla eget ex finibus dapibus.",
  },
  {
    title: "Vivamus Fringilla",
    slug: "vivamus-fringilla",
    content:
      "Vivamus fringilla, enim non consequat fringilla, odio mauris scelerisque tellus.",
  },
  {
    title: "Duis Elementum",
    slug: "duis-elementum",
    content: "Duis elementum nisl vitae tincidunt fringilla.",
  },
  {
    title: "Pellentesque Ac Diam",
    slug: "pellentesque-ac-diam",
    content:
      "Pellentesque ac diam sit amet est condimentum tristique vitae sed tellus.",
  },
  {
    title: "Nulla Sollicitudin",
    slug: "nulla-sollicitudin",
    content: "Nulla sollicitudin mauris at luctus suscipit.",
  },
  {
    title: "Fusce Euismod",
    slug: "fusce-euismod",
    content: "Fusce euismod eleifend felis, ut faucibus tellus ullamcorper ut.",
  },
  {
    title: "Aliquam Mollis",
    slug: "aliquam-mollis",
    content:
      "Aliquam mollis massa ut quam tincidunt, ut rhoncus augue ultricies.",
  },
  {
    title: "Proin In Enim",
    slug: "proin-in-enim",
    content: "Proin in enim vestibulum, mattis elit vitae, consequat lectus.",
  },
  {
    title: "Phasellus Nisl",
    slug: "phasellus-nisl",
    content: "Phasellus nisl ipsum, tincidunt et accumsan ac, lacinia nec mi.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
