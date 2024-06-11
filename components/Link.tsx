'use client';

import { useNavigate } from "./ClientRouter";

interface LinkProps extends React.PropsWithChildren<{ href: string }>{}

export default function Link({ href, children }: LinkProps) {
  const navigate = useNavigate();
  return <a onClick={() => navigate(href)}>{children}</a>
  }