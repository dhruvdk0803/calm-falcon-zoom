'use client';

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { deletePost } from '../../actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function DeletePostButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      return;
    }

    setIsDeleting(true);
    const result = await deletePost(id);
    setIsDeleting(false);

    if (result.success) {
      toast.success('Post deleted successfully');
      router.refresh();
    } else {
      toast.error(result.error || 'Failed to delete post');
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded-md transition-colors disabled:opacity-50"
      title="Delete Post"
    >
      {isDeleting ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
    </button>
  );
}