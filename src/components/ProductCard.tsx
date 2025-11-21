import Image from 'next/image';
import {Link} from '@/i18n/routing';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export default function ProductCard({ title, description, imageUrl, link }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-[var(--brand-navy)]">{title}</h3>
        <p className="mb-4 text-gray-600 line-clamp-3">{description}</p>
        {link ? (
          <Link
            href={link}
            className="inline-block font-semibold text-[var(--brand-gold)] hover:text-[var(--brand-navy)] transition-colors"
          >
            Learn more &rarr;
          </Link>
        ) : (
          <span className="text-sm text-gray-400">Coming Soon</span>
        )}
      </div>
    </div>
  );
}
