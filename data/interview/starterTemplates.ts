import { ProgrammingLanguage } from "@/types/interview";

export const STARTER_TEMPLATES: Record<ProgrammingLanguage, string> = {
  java: `import java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write your Java code here\n        System.out.println("Hello World");\n    }\n}`,
  python: `def solve():\n    # Write your Python code here\n    print("Hello World")\n\nif __name__ == "__main__":\n    solve()`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your C++ code here\n    cout << "Hello World" << endl;\n    return 0;\n}`,
  javascript: `function solve() {\n    // Write your JavaScript code here\n    console.log("Hello World");\n}\n\nsolve();`,
  c: `#include <stdio.h>\n\nint main() {\n    // Write your C code here\n    printf("Hello World\\n");\n    return 0;\n}`,
};
export type { ProgrammingLanguage };
