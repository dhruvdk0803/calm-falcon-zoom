import PostEditor from '../_components/PostEditor';

export default function NewPostPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Create New Post</h1>
      <PostEditor />
    </div>
  );
}