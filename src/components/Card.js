import Link from 'next/link';

const Card = ({ link, imgSrc, title, children }) => {
  return (
    <Link href={link} className="cardcontainer">
      <img src={imgSrc} alt={title} className="img1" />
      <h1 className="heading1">{title}</h1>
      <p className="para1">{children}</p>
      <button className="btn1">Click Here</button>
    </Link>
  );
};

export default Card;
