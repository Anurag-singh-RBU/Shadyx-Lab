import * as monaco from 'monaco-editor';
import { Theme } from "../../../types";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" }, 
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers :', evenNumbers);`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {

  numbers: number[];
  sum(): number;

}

class MathOperations implements NumberArray {

  constructor(public numbers: number[]) {}

  sum(): number {

    return this.numbers.reduce((acc, curr) => acc + curr, 0);

  }

}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers :', math.numbers);
console.log('Sum of numbers :', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers : {numbers_sum}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {

  public static void main(String[] args) {

    // Create array
    int[] numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    System.out.print("Original numbers : ");
    printArray(numbers);

  }
  
  public static void printArray(int[] arr){

    for(int n : arr) System.out.print(n + " ");
    System.out.println();

  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {

  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers :", numbers)
  
  // Calculate sum
  sum := 0

  for _, n := range numbers{

    sum += n

  }

  fmt.Println("Sum of numbers :", sum)

}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {

  // Create vector
  let numbers = vec![1, 2, 3, 4, 5];
  
  // Print original numbers
  println!("Original numbers : {:?}", numbers);
  
  // Calculate sum
  let sum: i32 = numbers.iter().sum();
  println!("Sum of numbers : {}", sum);

}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {

  // Create vector
  std::vector<int> numbers = {1, 2, 3, 4, 5};
  
  // Print original numbers
  std::cout << "Original numbers : ";
  for (int n : numbers) std::cout << n << " ";
  std::cout << std::endl;
  
  // Calculate sum
  int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
  std::cout << "Sum of numbers: " << sum << std::endl;
  
  return 0;

}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

class Program {

  static void Main() {

    // Create array
    int[] numbers = { 1, 2, 3, 4, 5 };
    
    // Print original numbers
    Console.WriteLine($"Original numbers : {string.Join(" ", numbers)}");
    
    // Calculate sum
    var sum = numbers.Sum();
    Console.WriteLine($"Sum of numbers : {sum}");

  }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers : #{numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers : #{sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers : \\(numbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers : \\(sum)")`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
];

type ThemeDefinition = {
  base: monaco.editor.BuiltinTheme;
  inherit: boolean;
  rules: Array<{
    token: string;
    foreground: string;
  }>;
  colors: Record<string, string>;
};

export const THEME_DEFINITONS: Record<string, ThemeDefinition> = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monacoInstance: typeof monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monacoInstance.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};
