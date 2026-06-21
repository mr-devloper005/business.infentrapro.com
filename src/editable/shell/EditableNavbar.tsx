'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const links = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]

  return (
    <header className="media-nav sticky top-0 z-50 border-b border-[#dcc3aa]/35 bg-[#f1e2d1]/95 text-[#541a1a] backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="media-logo flex items-center gap-2.5 leading-none" aria-label={`${SITE_CONFIG.name} home`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-[#810b38] shadow-[0_5px_15px_rgba(129,11,56,.22)]"><img src="/favicon.png" alt="" className="h-full w-full object-contain p-1" /></span>
          <span><span className="block text-[10px] font-black uppercase tracking-[.28em] text-[#810b38]">Media</span><span className="editorial-brand block text-2xl font-black tracking-[-.08em] sm:text-3xl">Signal</span></span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => <Link key={item.href} href={item.href} className="text-xs font-black uppercase tracking-[.16em] transition hover:text-[#810b38]">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          {session ? <button onClick={logout} className="hidden text-xs font-black uppercase tracking-[.14em] sm:block">Log out</button> : <Link href="/login" className="hidden text-xs font-black uppercase tracking-[.14em] sm:block">Sign in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[#810b38] px-4 py-2.5 text-[10px] font-black uppercase tracking-[.14em] text-[#f1e2d1] transition hover:bg-[#541a1a] sm:px-5">{session ? 'Publish' : 'Get started'}</Link>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-[#541a1a]/25 lg:hidden" aria-label="Toggle navigation">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      {open ? <nav className="grid border-t border-[#dcc3aa] bg-[#f1e2d1] p-4 lg:hidden">{links.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-[#dcc3aa]/70 py-4 text-sm font-black uppercase tracking-[.12em]">{item.label}</Link>)}</nav> : null}
    </header>
  )
}
