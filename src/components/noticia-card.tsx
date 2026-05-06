// import { Clock, Eye, User } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Noticia } from '@/data/noticias';
// import { cn } from '@/lib/utils';

// interface NoticiaCardProps {
//   noticia: Noticia;
//   size?: 'default' | 'large' | 'small';
//   className?: string;
//   showPreview?: boolean;
// }

// const SIZE_CONFIG = {
//   large: {
//     card: 'hover:shadow-lg transition-shadow duration-300',
//     imageContainer: 'relative h-64 md:h-80',
//     image: 'object-cover',
//     badge: 'absolute top-4 left-4 bg-[#ed145c] text-white px-3 py-1 rounded-full text-sm font-medium',
//     title: 'text-xl md:text-2xl leading-tight',
//     description: 'text-base',
//     content: 'flex items-center gap-4 text-sm text-gray-600',
//     iconSize: 'w-4 h-4',
//     layout: 'flex-col',
//   },
//   default: {
//     card: 'hover:shadow-lg transition-shadow duration-300',
//     imageContainer: 'relative h-48',
//     image: 'object-cover',
//     badge: 'absolute top-3 left-3 bg-[#ed145c] text-white px-2 py-1 rounded-full text-xs font-medium',
//     title: 'text-lg leading-tight',
//     description: 'text-sm',
//     content: 'flex items-center gap-3 text-sm text-gray-600',
//     iconSize: 'w-4 h-4',
//     layout: 'flex-col',
//   },
//   small: {
//     card: 'hover:shadow-md transition-shadow duration-300',
//     imageContainer: 'relative h-24 flex-shrink-0',
//     image: 'object-cover',
//     badge: 'text-xs text-[#ed145c] font-medium mb-2',
//     title: 'font-semibold text-sm leading-tight mb-2',
//     description: 'text-xs',
//     content: 'flex items-center text-xs text-gray-600',
//     iconSize: 'w-3 h-3',
//     layout: 'flex',
//   },
// };

// export function NoticiaCard({ noticia, size = 'default', className, showPreview = false }: NoticiaCardProps) {
//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return new Intl.DateTimeFormat('pt-BR', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     }).format(date);
//   };

//   const config = SIZE_CONFIG[size];
//   const isSmallCard = size === 'small';

//   return (
//     <Card className={cn('overflow-hidden', config.card, className)}>
//       <article className={cn(isSmallCard && config.layout, 'flex h-full flex-col justify-between')}>
//         {/* Container da imagem */}
//         <Link href={`/noticias/${noticia.slug}`} className={config.imageContainer}>
//           <Image
//             src={noticia.imagemUrl}
//             alt={`Imagem da notícia: ${noticia.titulo}`}
//             fill
//             className={config.image}
//             sizes={isSmallCard ? '96px' : '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'}
//             placeholder="blur"
//             blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
//           />
//           {/* Badge da categoria */}
//           <div className={cn(isSmallCard ? 'hidden' : `block ${config.badge}`)}>
//             <span className="inline-block">{noticia.categoria}</span>
//           </div>
//         </Link>

//         {/* Conteúdo do card */}
//         <div className={cn(isSmallCard && 'flex-1 p-4')}>
//           {/* Badge da categoria para small cards */}
//           {isSmallCard && (
//             <div className={config.badge}>
//               <span>{noticia.categoria}</span>
//             </div>
//           )}

//           {/* Header */}
//           {!isSmallCard ? (
//             <CardHeader>
//               <CardTitle className={config.title}>
//                 <Link
//                   href={`/noticias/${noticia.slug}`}
//                   className="rounded-sm transition-colors duration-200 hover:text-[#ed145c] focus:outline-none focus:ring-2 focus:ring-[#ed145c] focus:ring-offset-2"
//                   aria-label={`Leia mais sobre: ${noticia.titulo}`}
//                 >
//                   {noticia.titulo}
//                 </Link>
//               </CardTitle>
//               <CardDescription className={config.description}>{noticia.resumo}</CardDescription>
//             </CardHeader>
//           ) : (
//             <header className={config.title}>
//               <Link
//                 href={`/noticias/${noticia.slug}`}
//                 className="rounded-sm transition-colors duration-200 hover:text-[#ed145c] focus:outline-none focus:ring-2 focus:ring-[#ed145c] focus:ring-offset-2"
//                 aria-label={`Leia mais sobre: ${noticia.titulo}`}
//               >
//                 {noticia.titulo}
//               </Link>
//             </header>
//           )}

//           {/* Metadados */}
//           {!isSmallCard ? (
//             <CardContent>
//               <div className={config.content}>
//                 <div className="flex items-center gap-1">
//                   <User className={config.iconSize} aria-hidden="true" />
//                   <span>{noticia.autor}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock className={config.iconSize} aria-hidden="true" />
//                   <time dateTime={noticia.dataPublicacao}>{formatDate(noticia.dataPublicacao)}</time>
//                 </div>
//               </div>

//               {showPreview && (
//                 <div className="mt-4 flex gap-2">
//                   <Link
//                     className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-8 flex-1 items-center justify-center rounded-md px-3 text-xs font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1"
//                     href={`/preview/${noticia.slug}`}
//                   >
//                     <Eye className="mr-2 h-4 w-4" />
//                     Preview
//                   </Link>
//                   <Link
//                     className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring inline-flex h-8 flex-1 items-center justify-center rounded-md px-3 text-xs font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
//                     href={`/noticias/${noticia.slug}`}
//                   >
//                     Ler completa
//                   </Link>
//                 </div>
//               )}
//             </CardContent>
//           ) : (
//             <footer className={config.content}>
//               <Clock className={cn(config.iconSize, 'mr-1')} aria-hidden="true" />
//               <time dateTime={noticia.dataPublicacao}>{formatDate(noticia.dataPublicacao)}</time>
//             </footer>
//           )}
//         </div>
//       </article>
//     </Card>
//   );
// }
