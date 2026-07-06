// Usage: node scripts/set-role.mjs someone@gitam.edu FACULTY
import { PrismaClient } from "@prisma/client";

const [, , email, role] = process.argv;
const VALID_ROLES = ["STUDENT", "FACULTY", "ADMIN"];

if (!email || !role || !VALID_ROLES.includes(role)) {
  console.error("Usage: node scripts/set-role.mjs <email> <STUDENT|FACULTY|ADMIN>");
  process.exit(1);
}

const db = new PrismaClient();

const user = await db.user.findUnique({ where: { email } });
if (!user) {
  console.error(`No user found with email "${email}". They need to sign in at least once first, then re-run this.`);
  await db.$disconnect();
  process.exit(1);
}

await db.user.update({ where: { email }, data: { role } });
console.log(`${email} is now ${role}. They'll need to sign out and back in for it to take effect (roles are baked into the session token at login).`);
await db.$disconnect();