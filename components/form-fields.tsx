import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30'

export function Field({
  label,
  htmlFor,
  required,
  children,
  className,
}: {
  label: string
  htmlFor?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-clay"> *</span>}
      </label>
      {children}
    </div>
  )
}

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { className, ...rest } = props
  return <input className={cn(fieldBase, className)} {...rest} />
}

export function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  const { className, ...rest } = props
  return <textarea className={cn(fieldBase, 'min-h-24', className)} {...rest} />
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement>,
) {
  const { className, children, ...rest } = props
  return (
    <select className={cn(fieldBase, 'appearance-none', className)} {...rest}>
      {children}
    </select>
  )
}

export function UploadPlaceholder({ label = 'Upload photos (optional)' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-input bg-muted/40 px-4 py-6 text-center">
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">
        Photos help us understand the issue. (Prototype — upload coming soon)
      </p>
    </div>
  )
}
