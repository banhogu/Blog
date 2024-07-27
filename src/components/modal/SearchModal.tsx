import useDebounce from '@/hooks/useDebounce';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { Post } from '@/models/post';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getTag } from '@/utils/getTag';
import { useModalStore } from '@/store/useModal.store';
import { motion } from 'framer-motion';

const SearchModal = () => {
  const { allPost, setOpen } = useModalStore();

  const [keyWord, setKeyWord] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const debouncedKeyword = useDebounce(keyWord);

  const seenTags = new Set();

  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useOnClickOutside(ref, () => setOpen(false));

  const handleKeyword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setKeyWord(e.target.value);
    },
    [allPost]
  );

  const searchedPost = (title: string) => {
    const result = allPost.filter((post) => post.title.toLowerCase().includes(title.toLowerCase()));
    setFilteredPosts(result);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (debouncedKeyword !== '') {
      searchedPost(debouncedKeyword);
    } else {
      setFilteredPosts([]);
    }
  }, [debouncedKeyword]);

  return (
    <div className="fixed inset-0 overflow-y-scroll bg-gray-400 bg-opacity-20 z-50 backdrop-blur-sm">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div
          ref={ref}
          className=" w-[393px] mx-auto mt-[120px] bg-gray-50 px-6 py-4 rounded-md shadow-xl sm:w-[672px]"
        >
          <input
            onChange={handleKeyword}
            ref={inputRef}
            type="text"
            value={keyWord}
            placeholder="Type Post Title..."
            className={` bg-gray-50 outline-none font-bold text-xl text-gray-800 w-full placeholder-gray-500
          ${filteredPosts.length > 0 ? 'mb-6' : ''}
          `}
          />
          {debouncedKeyword !== '' && filteredPosts.length === 0 ? (
            <div className="text-gray-800 mt-8 py-4 font-semibold flex justify-center items-center">
              No Posts found.
            </div>
          ) : (
            <ul>
              {filteredPosts.map((post: Post, i: number) => {
                const isFirstOfTag = !seenTags.has(post.tag);
                if (isFirstOfTag) {
                  seenTags.add(post.tag);
                }

                const isFirst = i === 0;
                const isLast = i === filteredPosts.length - 1;

                return (
                  <li key={post.slug}>
                    <Link href={`https://banghojin.site/${post.slug}`}>
                      <div
                        onClick={() => setOpen(false)}
                        className={`text-gray-800 flex items-center py-3 transition-[background-color] hover:bg-gray-100 active:bg-gray-100
               ${!isFirst ? 'border-t-0' : ''}
               ${isLast ? 'border-b-0' : ''}`}
                      >
                        <div className="w-12 flex items-center justify-center mr-4 font-bold text-[16px]">
                          {isFirstOfTag && getTag(post.tag)}
                        </div>
                        <div className="flex-1 text-gray-800  dark:text-gray-100 flex flex-col">
                          <div
                            data-cy={`${post.title}`}
                            className="text-[16px] font-semibold text-gray-700"
                          >
                            {post.title}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchModal;
