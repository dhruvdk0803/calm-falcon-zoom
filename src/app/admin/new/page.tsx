"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Globe, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

export default function NewPost() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    cover_image: "",
    meta_title: "",
    meta_description: "",
    keywords: "",
    published: false,
  });

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const calculateReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
      meta_title: title,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          reading_time: calculateReadingTime(formData.content)
        }),
      });

      if (!res.ok) throw new Error('Failed to save post');
      
      toast.success("Post created successfully!");
      router.push('/admin');
      router.refresh();
    } catch (error) {
      toast.error("Error creating post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bebas uppercase tracking-wide">Create New Post</h1>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 font-bold uppercase cursor-pointer">
            <input 
              type="checkbox" 
              checked={formData.published}
              onChange={(e) => setFormData({...formData, published: e.target.checked})}
              className="w-6 h-6 accent-comic-red"
            />
            Publish Immediately
          </label>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-comic-red text-white px-6 py-3 rounded-xl border-4 border-black shadow-comic font-bebas text-2xl uppercase flex items-center gap-2 hover:translate-y-1 hover:shadow-comic-sm transition-all disabled:opacity-50"
          >
            <Save size={24} /> {loading ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-comic-sm space-y-4">
            <div>
              <label className="block font-bebas text-2xl uppercase mb-2">Post Title</label>
              <input 
                required
                type="text" 
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full bg-gray-50 border-4 border-black rounded-lg p-4 font-bold text-xl focus:outline-none focus:ring-4 focus:ring-comic-yellow"
                placeholder="Enter an epic title..."
              />
            </div>
            <div>
              <label className="block font-bebas text-2xl uppercase mb-2">Content (Markdown Supported)</label>
              <textarea 
                required
                value={formData.content}
                onChange={(e) => setFormData({...formData, content: e.target.value})}
                className="w-full h-96 bg-gray-50 border-4 border-black rounded-lg p-4 font-mono focus:outline-none focus:ring-4 focus:ring-comic-yellow"
                placeholder="Write your content here..."
              />
            </div>
            <div>
              <label className="block font-bebas text-2xl uppercase mb-2">Excerpt</label>
              <textarea 
                value={formData.excerpt}
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                className="w-full h-24 bg-gray-50 border-4 border-black rounded-lg p-4 font-bold focus:outline-none focus:ring-4 focus:ring-comic-yellow"
                placeholder="Short summary for the blog list..."
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Image Settings */}
          <div className="bg-white p-6 rounded-xl border-4 border-black shadow-comic-sm space-y-4">
            <h3 className="font-bebas text-3xl uppercase flex items-center gap-2 border-b-4 border-black pb-2"><ImageIcon /> Media</h3>
            <div>
              <label className="block font-bold uppercase mb-2 text-sm">Cover Image URL</label>
              <input 
                type="url" 
                value={formData.cover_image}
                onChange={(e) => setFormData({...formData, cover_image: e.target.value})}
                className="w-full bg-gray-50 border-2 border-black rounded-md p-2 font-bold focus:outline-none focus:ring-2 focus:ring-comic-yellow"
                placeholder="https://..."
              />
              {formData.cover_image && (
                <img src={formData.cover_image} alt="Preview" className="mt-4 w-full h-32 object-cover rounded-md border-2 border-black" />
              )}
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-comic-blue text-white p-6 rounded-xl border-4 border-black shadow-comic-sm space-y-4">
            <h3 className="font-bebas text-3xl uppercase flex items-center gap-2 border-b-4 border-black pb-2 text-outline-black"><Globe /> SEO Panel</h3>
            
            <div>
              <label className="block font-bold uppercase mb-2 text-sm">URL Slug</label>
              <input 
                type="text" 
                value={formData.slug}
                onChange={(e) => setFormData({...formData, slug: e.target.value})}
                className="w-full bg-white text-black border-2 border-black rounded-md p-2 font-bold focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold uppercase mb-2 text-sm">Meta Title</label>
              <input 
                type="text" 
                value={formData.meta_title}
                onChange={(e) => setFormData({...formData, meta_title: e.target.value})}
                className="w-full bg-white text-black border-2 border-black rounded-md p-2 font-bold focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold uppercase mb-2 text-sm">Meta Description</label>
              <textarea 
                value={formData.meta_description}
                onChange={(e) => setFormData({...formData, meta_description: e.target.value})}
                className="w-full bg-white text-black border-2 border-black rounded-md p-2 font-bold focus:outline-none h-24"
              />
            </div>
            <div>
              <label className="block font-bold uppercase mb-2 text-sm">Keywords (comma separated)</label>
              <input 
                type="text" 
                value={formData.keywords}
                onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                className="w-full bg-white text-black border-2 border-black rounded-md p-2 font-bold focus:outline-none"
              />
            </div>

            {/* Live SEO Preview */}
            <div className="mt-6 bg-white text-black p-4 rounded-lg border-2 border-black">
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">Google Preview</p>
              <p className="text-blue-800 text-lg truncate">{formData.meta_title || 'Your Meta Title'}</p>
              <p className="text-green-700 text-sm truncate">supersmashkc.com/events/{formData.slug || 'your-slug'}</p>
              <p className="text-gray-600 text-sm line-clamp-2">{formData.meta_description || 'Your meta description will appear here in search results...'}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}