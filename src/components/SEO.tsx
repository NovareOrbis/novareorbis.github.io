import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
};

export const SEO = ({ title, description }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};