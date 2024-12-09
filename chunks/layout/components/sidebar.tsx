'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Users,
  HelpCircle,
  LogOut,
  Moon,
  Sun,
} from 'lucide-react';
import { useTheme } from 'next-themes';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashddddboard', href: '/' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '/help' },
];

export default function SideMenu() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'flex h-screen flex-col justify-between border-r bg-background p-4 pt-8 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
      )}>
      <div>
        <div className="flex items-center justify-between pb-8">
          {!isCollapsed && <h2 className="text-2xl font-bold">Menu</h2>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}>
            {isCollapsed ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </Button>
        </div>
        <nav>
          <ul className="space-y-2">
            {menuItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                    pathname === item.href
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                    isCollapsed && 'justify-center',
                  )}>
                  <item.icon className={cn('h-5 w-5', !isCollapsed && 'mr-3')} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="space-y-2">
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-muted-foreground hover:text-foreground',
            isCollapsed && 'justify-center',
          )}>
          <LogOut className={cn('h-5 w-5', !isCollapsed && 'mr-3')} />
          {!isCollapsed && <span>Login</span>}
        </Button>
      </div>
    </div>
  );
}
