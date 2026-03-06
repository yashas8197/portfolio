import { StaticImageData } from "next/image";

interface ProductSimple {
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: StaticImageData;
}

const ProductCardSimple = ({ product }: { product: ProductSimple }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image thumbnail */}
        <div className="relative w-full md:w-[380px] flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-700">
          <img
            src={product.image.src}
            alt={product.name}
            className="w-full h-52 md:h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-7 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-3">
              {product.name}
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
              {product.description}
            </p>

            <div className="hidden sm:flex flex-wrap gap-1.5 mb-5">
              {product.tech.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {product.tech.length > 5 && (
                <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 rounded-lg text-xs font-medium">
                  +{product.tech.length - 5}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-5">
            <a
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSimple;
