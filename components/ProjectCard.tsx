import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';

interface Props {
  title?: string;
  description: string;
  image: string | undefined;
  url: string;
  width?: number;
  height?: number;
  animation: string;
  type?: string | undefined;
  status?: string | undefined;
}

const ProjectCard = ({
  title,
  description,
  image,
  url,
  width,
  height,
  animation,
  type,
  status
}: Props) => {
  return (
    <Link href={url} target="_blank" className="break-inside-avoid mb-10 block">
      <Card className="hover:bg-secondary group rounded-3xl  transition-colors">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <div>
                {image && (
                  <Image
                    src={image}
                    width={width ? width : 100}
                    height={height ? height : 100}
                    alt={'logo'}
                    className={`transition-transform duration-300 ease-in-out transform group-hover:rotate-6`}
                  />
                )}
              </div>

              <div>{title && <h2 className="text-xl">{title}</h2>}</div>
            </div>

            <div className="flex items-center gap-2">
              <Badge className="bg-primary text-accent text-center">{type || 'Startup'}</Badge>
              {status && (
                <Badge
                  variant="outline"
                  className={
                    status.toLowerCase() === 'discontinued'
                      ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
                      : status.toLowerCase() === 'in development'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
                        : status.toLowerCase() === 'inactive'
                          ? 'border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300'
                          : 'text-center'
                  }
                >
                  {status}
                </Badge>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
