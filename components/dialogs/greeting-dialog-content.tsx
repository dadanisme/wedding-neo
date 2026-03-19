import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function GreetingDialogContent({ guest }: { guest: string }) {
  return (
    <DialogHeader>
      <DialogTitle>Welcome, {guest}!</DialogTitle>
      <DialogDescription>
        We are delighted to have you celebrate this special day with us.
      </DialogDescription>
    </DialogHeader>
  )
}
