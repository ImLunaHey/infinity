export const WebPageEmbed: React.FC<{
  url: string;
}> = ({ url }) => {
  return (
    <div className="p-2 border border-gray-300 rounded-lg">
      <iframe src={url} title="Web Page Embed" frameBorder="0" className="w-full h-full"></iframe>
    </div>
  );
};
