import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LinkComponent } from './LinkComponent';
import { AuthOptions } from './AuthOptions';

export async function Auth() {
  const session = await getServerSession(authConfig);

  if (!session) {
    return (
      <LinkComponent href="/login">
        Login
      </LinkComponent>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-3 items-center hover:cursor-pointer">
          <Image
            alt="name"
            src="https://avatars.githubusercontent.com/u/97652778?v=4"
            width={40}
            height={40}
            className="rounded-full"
          />
          <ChevronDown className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuLabel className="flex flex-col gap-3 items-center pt-5">
          <Image
            alt="name"
            src="https://avatars.githubusercontent.com/u/97652778?v=4"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="text-lg font-medium text-center">
            Yenaro Joel Noa Camino
          </span>
          <AuthOptions />
        </DropdownMenuLabel>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}