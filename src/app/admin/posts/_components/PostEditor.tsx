'use client';

import { useState } from 'react';
import { savePost } from '../../actions';

export default function PostEditor({ post }: { post?: any }) {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <form action={savePost} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {post && <input type="hidden" name="id" value={post.id} />}
      
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button 
          type="button"
          onClick={() => setActiveTab('content')}
          className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'content' ? 'bg-white border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Content & Details
        </button>
        <button 
          type="button"
          onClick={() => setActiveTab('seo')}
          className={`px-6 py-4 font-medium text-sm transition-colors ${activeTab === 'seo' ? 'bg-white border-b-2 border-black text-black' : 'text-gray-500 hover:text-gray-700'}`}
        >
          SEO Settings
        </button>
      </div>

      <div className="p-8">
        {/* CONTENT TAB */}
        <div className={activeTab === 'content' ? 'block' : 'hidden'}>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Post Title *</label>
              <input 
                type="text" 
                name="title" 
                defaultValue={post?.title} 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                placeholder="Enter an engaging title..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom Slug (Optional)</label>
                <input 
                  type="text" 
                  name="slug" 
                  defaultValue={post?.slug} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  placeholder="auto-generated-if-left-blank"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL</label>
                <input 
                  type="url" 
                  name="cover_image" 
                  defaultValue={post?.cover_image} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  placeholder="https://res.cloudinary.com/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt (Short Summary)</label>
              <textarea 
                name="excerpt" 
                defaultValue={post?.excerpt} 
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                placeholder="A brief summary of the post..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content (Markdown / HTML supported) *</label>
              <textarea 
                name="content" 
                defaultValue={post?.content} 
                required
                rows={15}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all font-mono text-sm"
                placeholder="Write your amazing content here..."
              />
            </div>
          </div>
        </div>

        {/* SEO TAB */}
        <div className={activeTab === 'seo' ? 'block' : 'hidden'}>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-blue-800 font-medium mb-1">SEO Optimization</h3>
              <p className="text-blue-600 text-sm">Fill out these fields to improve how your post appears on Google and social media.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
              <input 
                type="text" 
                name="meta_title" 
                defaultValue={post?.meta_title} 
                maxLength={60}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                placeholder="SEO Title (Keep under 60 chars)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
              <textarea 
                name="meta_description" 
                defaultValue={post?.meta_description} 
                maxLength={160}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                placeholder="SEO Description (Keep under 160 chars)"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords (Comma separated)</label>
                <input 
                  type="text" 
                  name="keywords" 
                  defaultValue={post?.keywords} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  placeholder="rage room, kansas city, stress relief"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Canonical URL</label>
                <input 
                  type="url" 
                  name="canonical_url" 
                  defaultValue={post?.canonical_url} 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                  placeholder="https://www.supersmashkc.com/events/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Open Graph (OG) Image URL</label>
              <input 
                type="url" 
                name="og_image" 
                defaultValue={post?.og_image} 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
                placeholder="Image URL for social media sharing"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="published" 
            name="published" 
            value="true"
            defaultChecked={post?.published}
            className="w-5 h-5 text-black border-gray-300 rounded focus:ring-black"
          />
          <label htmlFor="published" className="font-medium text-gray-700 cursor-pointer">Publish immediately</label>
        </div>
        <button 
          type="submit" 
          className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          Save Post
        </button>
      </div>
    </form>
  );
}