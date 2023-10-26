import mdToHTML from 'snarkdown';


interface Props{
  content: string;
}
const PostContent = ({content}: Props) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: mdToHTML(content),
      }}
    ></p>
  );
};

export default PostContent;
