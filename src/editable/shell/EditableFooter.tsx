'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function EditableFooter() {
  const year = new Date().getFullYear()
  return <footer className="bg-[#541a1a] text-[#f1e2d1]">
    <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_.7fr_.8fr] lg:py-18">
      <div><p className="text-[10px] font-black uppercase tracking-[.3em] text-[#dcc3aa]">Media distribution</p><h2 className="editorial-serif mt-3 max-w-md text-4xl font-black leading-none sm:text-5xl">Give your next story a clear signal.</h2><Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f1e2d1] px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-[#810b38]">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#dcc3aa]">Explore</p><div className="mt-5 grid gap-3 text-sm font-bold">{[{label:'Distribution',href:'/media-distribution'},{label:'All updates',href:'/search'},{label:'About',href:'/about'}].map(x=><Link key={x.href} href={x.href} className="hover:text-[#dcc3aa]">{x.label}</Link>)}</div></div>
      <div><p className="text-[10px] font-black uppercase tracking-[.24em] text-[#dcc3aa]">Contact</p><p className="mt-5 max-w-xs text-sm leading-7 text-[#f1e2d1]/75">Thoughtful distribution for announcements, reports, and stories that deserve a wider audience.</p><Link href="/contact" className="mt-4 inline-block text-sm font-bold underline underline-offset-4">Get in touch</Link></div>
    </div>
    <div className="border-t border-[#f1e2d1]/15 px-5 py-5 text-center text-[10px] font-black uppercase tracking-[.18em] text-[#dcc3aa]/75">© {year} {SITE_CONFIG.name}. All rights reserved.</div>
  </footer>
}
