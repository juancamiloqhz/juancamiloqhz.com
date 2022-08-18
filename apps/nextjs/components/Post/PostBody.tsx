export default function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
