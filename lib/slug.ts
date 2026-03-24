import { createHash } from "crypto"

export function generateSlug(name: string): string {
  return createHash("sha256")
    .update(name.trim())
    .digest("base64url")
    .slice(0, 10)
}
