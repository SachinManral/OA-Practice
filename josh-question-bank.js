window.JOSH_TECH_SET = {id: "jtg", label: "Josh Technology OA", title: "Josh Technology Group OA - 250 MCQs", badge: "+2 correct / -1 wrong", quizNote: "Scoring: +2 for correct answers, -1 for wrong answers. Type 2 output questions have no negative marking.", quizMaxCount: 50, scoreConfig: {correct: 2, wrong: -1, timerSeconds: 45, noNegativeFlag: "t2"}, subjectColors: {"C-OUT": "c-out", PTR: "ptr", OOP: "oop", DSA: "dsa", SQL: "sql", OS: "os", CN: "cn", APT: "apt", DBMS: "dbms"}, subjectLabels: {ALL: "All", "C-OUT": "Java/C Output", PTR: "Pointers", OOP: "OOP", DSA: "DSA", SQL: "SQL", OS: "OS", CN: "Networks", APT: "Aptitude", DBMS: "DBMS"}, subjectOrder: [
    "ALL",
    "C-OUT",
    "PTR",
    "OOP",
    "DSA",
    "SQL",
    "OS",
    "CN",
    "APT"
  ], questions: [
    {id: 1, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 5;
    if (x == 5) {
      if (x == 5) break;
      System.out.print("Hello");
    }
    System.out.print("Hi");
  }
}`, o: [
        "Hello",
        "Hi",
        "HelloHi",
        "Compile Error"
      ], a: 3, e: "In Java, break is also illegal outside a loop or switch, so this code is a compile-time error."},
    {id: 2, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 1, y = 2, z = 3;
    System.out.printf("%d", x, y, z);
  }
}`, o: [
        "1",
        "1 2 3",
        "Compile Error",
        "3"
      ], a: 0, e: "Java Formatter ignores extra arguments not referenced by the format string, so only x is printed."},
    {id: 3, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    char[] s = "1234".toCharArray();
    int p = 3;
    s[p] = '6';
    p = p - 2;
    s[p] = '8';
    System.out.print(new String(s));
  }
}`, o: [
        "1836",
        "1864",
        "1286",
        "1834"
      ], a: 0, e: "The char array is changed at index 3 and then index 1, producing 1836."},
    {id: 4, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 10, b = 5, c = 5;
    int d = (b + c == a) ? 1 : 0;
    System.out.print(d);
  }
}`, o: [
        "0",
        "1",
        "10",
        "Compile Error"
      ], a: 1, e: "b+c equals 10, which equals a, so the ternary stores 1."},
    {id: 5, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    String p = "hello";
    System.out.print(p.charAt(0));
  }
}`, o: [
        "hello",
        "h",
        "Compile Error",
        "e"
      ], a: 1, e: "charAt(0) reads the first character of hello, which is h."},
    {id: 6, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int printed = "Hello".length();
    System.out.print("Hello");
    if (printed != 0)
      System.out.print("hi");
    else
      System.out.print("condition failed");
  }
}`, o: [
        "Hello",
        "Hellohi",
        "condition failed",
        "Hi"
      ], a: 1, e: "The code prints Hello, then uses its length as the successful condition and prints hi."},
    {id: 7, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 0, j = 1, k = 2;
    boolean value = (i++ != 0) || (j++ != 0) || (k++ != 0);
    int m = value ? 1 : 0;
    System.out.print(m + " " + i + " " + j + " " + k);
  }
}`, o: [
        "1 1 2 3",
        "1 1 2 2",
        "0 1 2 2",
        "1 1 1 2"
      ], a: 1, e: "The OR expression short-circuits after j++ is true, so k is not incremented."},
    {id: 8, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int i=3;
  printf("%d %d %d",i,i++,++i);
}`, o: [
        "3 3 4",
        "5 4 5",
        "5 3 5",
        "Undefined"
      ], a: 3, e: "Modifying and reading i multiple times without sequence points is undefined behavior in C. The compiler can produce any output."},
    {id: 9, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 5, b = 10, c = 15;
    System.out.print(a > b ? a : (c < b ? c : b));
  }
}`, o: [
        "5",
        "10",
        "15",
        "Compile Error"
      ], a: 1, e: "a>b is 5>10 = false -> evaluate c<b?c:b. c<b is 15<10 = false -> result is b=10. Output: 10."},
    {id: 10, s: "C-OUT", t2: true, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int x=10;
  int y = x++ + ++x;
  printf("%d %d",x,y);
}`, o: [
        "12 22",
        "12 21",
        "12 23",
        "Undefined"
      ], a: 3, e: "x++ and ++x both modify x without a sequence point -> undefined behavior. Any answer is technically correct, but this tests if you know it's UB."},
    {id: 11, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
void f(int a[]){
  printf("%d",sizeof(a));
}
int main(){
  int arr[]={1,2,3,4,5};
  printf("%d ",sizeof(arr));
  f(arr);
}`, o: [
        "20 20",
        "20 4",
        "20 8",
        "4 4"
      ], a: 1, e: "sizeof(arr) in main is 5x4=20. Inside f, the array parameter decays to a pointer, so sizeof(a)=sizeof(int*). On a 32-bit system the output is 20 4; on a 64-bit system it would be 20 8. This question assumes a 32-bit environment."},
    {id: 12, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 5; i++) {
      if (i == 3) continue;
      System.out.print(i + " ");
    }
  }
}`, o: [
        "0 1 2 4",
        "0 1 2 3 4",
        "0 1 2",
        "0 1 2 3"
      ], a: 0, e: "continue skips the rest of loop body for i=3. So 3 is not printed. Output: 0 1 2 4."},
    {id: 13, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 2;
    switch (a) {
      case 1: System.out.print("one");
      case 2: System.out.print("two");
      case 3: System.out.print("three");
      default: System.out.print("default");
    }
  }
}`, o: [
        "two",
        "twothreedefault",
        "twodefault",
        "two three default"
      ], a: 1, e: "No break statements! Execution falls through from case 2 onwards. Output: twothreedefault."},
    {id: 14, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 1;
    System.out.print((a << 1) + " " + (a << 2) + " " + (a << 3));
  }
}`, o: [
        "2 4 8",
        "1 2 3",
        "0 0 0",
        "2 3 4"
      ], a: 0, e: "Left shift by n = multiply by 2^n. 1<<1=2, 1<<2=4, 1<<3=8. Output: 2 4 8."},
    {id: 15, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 8;
    System.out.print((a >> 1) + " " + (a >> 2));
  }
}`, o: [
        "4 2",
        "8 4",
        "2 1",
        "Compile Error"
      ], a: 0, e: "Right shift by n = divide by 2^n. 8>>1=4, 8>>2=2. Output: 4 2."},
    {id: 16, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 0;
    while (i < 5) {
      System.out.print(i + " ");
      i += 2;
    }
  }
}`, o: [
        "0 2 4",
        "0 1 2 3 4",
        "0 2 4 6",
        "Infinite loop"
      ], a: 0, e: "i starts at 0, increments by 2. Prints: 0 (i=2), 2 (i=4), 4 (i=6). i=6 >= 5, loop ends. Output: 0 2 4."},
    {id: 17, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    char c = 'A';
    System.out.print((int)c + " " + (char)(c + 1));
  }
}`, o: [
        "65 B",
        "A B",
        "65 66",
        "A 66"
      ], a: 0, e: "'A' has ASCII value 65. %d prints 65. c+1=66, %c prints char 66 = 'B'. Output: 65 B."},
    {id: 18, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 5, b = 3;
    System.out.print(a & b);
    System.out.print(" " + (a | b));
    System.out.print(" " + (a ^ b));
  }
}`, o: [
        "1 7 6",
        "5 3 6",
        "1 5 6",
        "7 1 6"
      ], a: 0, e: "5=101, 3=011. AND=001=1, OR=111=7, XOR=110=6. Output: 1 7 6."},
    {id: 19, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 5;
    do {
      System.out.print(i + " ");
      i--;
    } while (i > 5);
  }
}`, o: [
        "5",
        "Nothing",
        "5 4 3 2 1",
        "Infinite loop"
      ], a: 0, e: "do-while executes the body ONCE before checking the condition. i=5 is printed. Then i=4. 4>5 is false, loop ends. Output: 5."},
    {id: 20, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int[] arr = {10, 20, 30, 40, 50};
    System.out.print(arr[1] + " " + arr[2]);
  }
}`, o: [
        "20 30",
        "10 30",
        "20 40",
        "Compile Error"
      ], a: 0, e: "Java arrays do not support 2[arr], so the equivalent index access is arr[2]."},
    {id: 21, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  static int f(int n) {
    if (n <= 1) return n;
    return f(n - 1) + f(n - 2);
  }
  public static void main(String[] args) {
    System.out.print(f(6));
  }
}`, o: [
        "8",
        "13",
        "5",
        "21"
      ], a: 0, e: "This is Fibonacci. f(0)=0,f(1)=1,f(2)=1,f(3)=2,f(4)=3,f(5)=5,f(6)=8. Output: 8."},
    {id: 22, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    System.out.print(5 / 2);
    System.out.printf(" %f", 5.0 / 2);
  }
}`, o: [
        "2 2.500000",
        "2 2.5",
        "2.5 2.500000",
        "2 2"
      ], a: 0, e: "5/2 = integer division = 2. 5.0/2 = float division = 2.5, printed as 2.500000 with %f. Output: 2 2.500000."},
    {id: 23, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 10;
    {
      int innerX = 20;
      System.out.print(innerX + " ");
    }
    System.out.print(x);
  }
}`, o: [
        "10 10",
        "20 10",
        "20 20",
        "Compile Error"
      ], a: 1, e: "Inner block has its own x=20, which shadows outer x=10. After the block, outer x=10 is used. Output: 20 10."},
    {id: 24, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 0;
    System.out.print(i == 0 ? 1 : 0);
    System.out.print(" " + ((i != 0) ? 1 : 0));
  }
}`, o: [
        "1 0",
        "0 1",
        "1 1",
        "0 0"
      ], a: 0, e: "The ternary expressions print the integer equivalents of !i and !!i."},
    {id: 25, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 1, b = 0;
    System.out.print((a != 0 && b != 0) ? 1 : 0);
    System.out.print(" " + ((a != 0 || b != 0) ? 1 : 0));
    System.out.print(" " + (a == 0 ? 1 : 0));
  }
}`, o: [
        "0 1 0",
        "1 1 0",
        "0 1 1",
        "1 0 1"
      ], a: 0, e: "The boolean expressions are converted to 1 or 0 to match the original numeric output style."},
    {id: 26, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int x = (1,2,3,4,5);
  printf("%d",x);
}`, o: [
        "1",
        "5",
        "15",
        "Compile Error"
      ], a: 1, e: "The comma operator evaluates all expressions left to right and returns the value of the rightmost. So x=5. Output: 5."},
    {id: 27, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  static int x = 5;
  public static void main(String[] args) {
    System.out.print(x-- + " ");
    if (x != 0) main(new String[0]);
  }
}`, o: [
        "5 4 3 2 1",
        "5 4 3 2",
        "Infinite loop",
        "5"
      ], a: 0, e: "The static x is shared across recursive calls to main, so it prints 5 down to 1."},
    {id: 28, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 300;
    byte b = (byte) a;
    System.out.print(b);
  }
}`, o: [
        "300",
        "44",
        "256",
        "Overflow error"
      ], a: 1, e: "Casting 300 to byte wraps to 44 in Java."},
    {id: 29, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 10, b = 20;
    if (a > b)
      System.out.print("a>b");
    System.out.print("executed");
    System.out.print(" done");
  }
}`, o: [
        "a>b executed done",
        "executed done",
        "done",
        "a>b done"
      ], a: 1, e: "No braces! Only the first printf is inside the if. The second printf(\"executed\") is outside the if and always runs. Output: executed done."},
    {id: 30, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    for (int i = 10; i >= 1; i--) {
      if (i % 3 == 0 && i % 5 == 0) System.out.print("FizzBuzz ");
      else if (i % 3 == 0) System.out.print("Fizz ");
      else if (i % 5 == 0) System.out.print("Buzz ");
      else System.out.print(i + " ");
    }
  }
}`, o: [
        "10 Buzz 8 7 Fizz Buzz 4 Fizz 2 1",
        "Buzz Fizz 8 7 Fizz Buzz 4 Fizz 2 1",
        "10 Fizz 8 7 Fizz Buzz 4 Fizz 2 1",
        "Buzz 9 8 7 Fizz Buzz 4 Fizz 2 1"
      ], a: 1, e: "The loop runs from 10 down to 1. For i=10 it prints \"Buzz\", for 9 it prints \"Fizz\", then 8, 7, Fizz, Buzz, 4, Fizz, 2, 1. There is no FizzBuzz because 15 is not in range. Output: Buzz Fizz 8 7 Fizz Buzz 4 Fizz 2 1."},
    {id: 31, s: "C-OUT", t2: true, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int a=10;
  printf("%d %d %d", a, a++, ++a);
}`, o: [
        "10 10 12",
        "12 11 12",
        "12 10 12",
        "Undefined Behavior"
      ], a: 3, e: "Multiple modifications without sequence point = undefined behavior. This is a classic UB trap."},
    {id: 32, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    System.out.print(Integer.BYTES);
    System.out.print(" " + Byte.BYTES);
    System.out.print(" " + Float.BYTES);
    System.out.print(" " + Double.BYTES);
  }
}`, o: [
        "4 1 4 8",
        "2 1 4 8",
        "4 2 4 8",
        "8 1 4 8"
      ], a: 0, e: "Java byte-size constants give int=4, byte=1, float=4, and double=8."},
    {id: 33, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 5, b = 2;
    System.out.print((a % b) + " " + (-a % b));
  }
}`, o: [
        "1 -1",
        "1 1",
        "1 0",
        "0 -1"
      ], a: 0, e: "5%2=1. In C, result of % has the sign of the dividend. -5%2 = -1. Output: 1 -1."},
    {id: 34, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    float f = 3.14f;
    int i = (int) f;
    System.out.printf("%d %.2f", i, f);
  }
}`, o: [
        "3 3.14",
        "3 3.00",
        "3 3.1",
        "Compile Error"
      ], a: 0, e: "Cast (int)f = 3 (truncation). f itself is unchanged = 3.14. Output: 3 3.14."},
    {id: 35, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    char[] str = "Hello\0".toCharArray();
    int i = 0;
    while (str[i] != '\0')
      i++;
    System.out.print(i);
  }
}`, o: [
        "4",
        "5",
        "6",
        "0"
      ], a: 1, e: "The char array includes an explicit null character, so the loop stops after Hello and prints 5."},
    {id: 36, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  static void swap(int a, int b) {
    int t = a; a = b; b = t;
  }
  public static void main(String[] args) {
    int x = 5, y = 10;
    swap(x, y);
    System.out.print(x + " " + y);
  }
}`, o: [
        "10 5",
        "5 10",
        "5 5",
        "10 10"
      ], a: 1, e: "Java passes primitive values by value, so swap changes only local copies."},
    {id: 37, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 0;
    x = (x == 0) ? 1 : 0;
    System.out.print(x);
  }
}`, o: [
        "0",
        "1",
        "Compile Error",
        "Garbage"
      ], a: 1, e: "x==0 evaluates to 1 (true). So x=1. Output: 1."},
    {id: 38, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int[] arr = new int[5];
    for (int i = 0; i < 5; i++) arr[i] = i * i;
    System.out.print(arr[0] + " " + arr[2] + " " + arr[4]);
  }
}`, o: [
        "0 4 16",
        "0 2 4",
        "1 4 9",
        "0 4 8"
      ], a: 0, e: "arr[0]=0, arr[1]=1, arr[2]=4, arr[3]=9, arr[4]=16. Output: 0 4 16."},
    {id: 39, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 5;
    System.out.print(a > 3 ? (a < 10 ? a * 2 : a + 10) : a - 3);
  }
}`, o: [
        "5",
        "10",
        "2",
        "8"
      ], a: 1, e: "a>3 is true -> evaluate a<10?a*2:a+10. a<10 is true -> a*2=10. Output: 10."},
    {id: 40, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
#define MAX(a,b) a>b?a:b
int main(){
  int x=5,y=3;
  printf("%d", 2*MAX(x,y));
}`, o: [
        "10",
        "5",
        "11",
        "Compile Error"
      ], a: 1, e: "Because the macro is missing parentheses, 2*MAX(x,y) expands to 2*x>y?x:y. With x=5 and y=3, that becomes 10>3?5:3, which evaluates to 5. This is a classic macro-precedence trap."},
    {id: 41, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 1;
    while (i++ < 5)
      System.out.print(i + " ");
  }
}`, o: [
        "1 2 3 4",
        "2 3 4 5",
        "1 2 3 4 5",
        "2 3 4 5 6"
      ], a: 1, e: "i++ returns current value THEN increments. Check: i=1<5 (true, i becomes 2) print 2. i=2<5 (true, i=3) print 3. ... i=4<5 (true, i=5) print 5. i=5<5 (false). Output: 2 3 4 5."},
    {id: 42, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int a=7;
  if(a=5) printf("true");
  else printf("false");
}`, o: [
        "true",
        "false",
        "Compile Error",
        "7"
      ], a: 0, e: "a=5 is assignment (not ==). Assignment returns the assigned value 5, which is truthy. Output: true."},
    {id: 43, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 5;
    System.out.print((i > 3 && i < 10) ? 1 : 0);
    System.out.print(" " + ((i > 3 && i > 10) ? 1 : 0));
  }
}`, o: [
        "1 0",
        "0 1",
        "1 1",
        "0 0"
      ], a: 0, e: "5>3 AND 5<10 -> 1 AND 1 = 1. 5>3 AND 5>10 -> 1 AND 0 = 0. Output: 1 0."},
    {id: 44, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 5, y = 0;
    int z = (x != 0 && y != 0) ? x : y;
    System.out.print(z);
  }
}`, o: [
        "0",
        "5",
        "1",
        "Compile Error"
      ], a: 0, e: "x&&y = 5&&0 = 0 (false). Ternary: 0?x:y = y = 0. Output: 0."},
    {id: 45, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  static void f(int[] p) {
    p[0] = p[0] + 5;
  }
  public static void main(String[] args) {
    int[] a = {10};
    f(a);
    System.out.print(a[0]);
  }
}`, o: [
        "10",
        "15",
        "5",
        "Compile Error"
      ], a: 1, e: "The method receives a reference to the array object, so changing p[0] updates a[0]."},
    {id: 46, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 10, b = 20;
    a = a + b;
    b = a - b;
    a = a - b;
    System.out.print(a + " " + b);
  }
}`, o: [
        "20 10",
        "10 20",
        "10 10",
        "20 20"
      ], a: 0, e: "Swap without temp. a=30,b=10,a=20. Output: 20 10."},
    {id: 47, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5};
    System.out.print(arr[2] + " " + arr[4]);
  }
}`, o: [
        "3 5",
        "2 4",
        "3 4",
        "Compile Error"
      ], a: 0, e: "p=arr=&arr[0]. p+2=&arr[2], *(p+2)=arr[2]=3. p+4=&arr[4], *(p+4)=5. Output: 3 5."},
    {id: 48, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    for (int i = 0; i < 3; ) {
      System.out.print(i++ + " ");
    }
  }
}`, o: [
        "0 1 2",
        "1 2 3",
        "0 1 2 3",
        "Infinite loop"
      ], a: 0, e: "Init is empty, update is in the loop body (i++). Post-increment returns old value. Prints 0,1,2. Stops at i=3. Output: 0 1 2."},
    {id: 49, s: "C-OUT", t2: true, q: "What is the output?", c: `#include<stdio.h>
int main(){
  char *s="abc";
  printf("%d",strlen(s));
  s[0]='A';
  printf(" %c",s[0]);
}`, o: [
        "3 A",
        "3 a",
        "3 Segfault",
        "Compile Error"
      ], a: 2, e: "strlen(s) prints 3 first. Then s[0]='A' attempts to modify a string literal, which is undefined behavior and typically causes a segmentation fault in practice."},
    {id: 50, s: "C-OUT", t2: false, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int x=5;
  int y=x++ + x++;
  printf("%d %d",x,y);
}`, o: [
        "7 11",
        "7 10",
        "Undefined",
        "5 10"
      ], a: 2, e: "Two increments to x without sequence point = undefined behavior. Classic UB."},
    {id: 51, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int[] a = {1, 2, 3};
    int p = 1;
    System.out.print(a[p] + " " + a[2]);
  }
}`, o: [
        "2 3",
        "1 3",
        "2 2",
        "Compile Error"
      ], a: 0, e: "p=a=&a[0]. p++ -> p=&a[1]. *p=a[1]=2. *(a+2)=a[2]=3. Output: 2 3."},
    {id: 52, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int i = 10;
    while (i != 0) {
      i /= 2;
      System.out.print(i + " ");
    }
  }
}`, o: [
        "5 2 1 0",
        "5 2 1",
        "10 5 2 1",
        "5 2 0"
      ], a: 0, e: "i=10: i=5 print 5. i=5: i=2 print 2. i=2: i=1 print 1. i=1: i=0 print 0. i=0: loop ends. Output: 5 2 1 0."},
    {id: 53, s: "C-OUT", t2: true, q: "What is the output?", c: `#include<stdio.h>
int main(){
  int a=5;
  int b=++a + ++a;
  printf("%d %d",a,b);
}`, o: [
        "7 13",
        "7 12",
        "7 14",
        "Undefined"
      ], a: 3, e: "Multiple modifications to a without sequence point = undefined behavior."},
    {id: 54, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int n = 12345;
    int rev = 0;
    while (n != 0) {
      rev = rev * 10 + n % 10;
      n /= 10;
    }
    System.out.print(rev);
  }
}`, o: [
        "12345",
        "54321",
        "54312",
        "12345"
      ], a: 1, e: "Reverse of 12345 = 54321."},
    {id: 55, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 5;
    switch (x) {
      case 5: System.out.print("five "); break;
      case 6: System.out.print("six ");
      default: System.out.print("default");
    }
  }
}`, o: [
        "five",
        "five default",
        "five six default",
        "default"
      ], a: 0, e: "x=5 matches case 5. Prints \"five \" then break exits switch. Output: five."},
    {id: 56, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int n = 5, fact = 1;
    while (n > 0) fact *= n--;
    System.out.print(fact);
  }
}`, o: [
        "120",
        "24",
        "720",
        "5"
      ], a: 0, e: "5! = 5x4x3x2x1 = 120. n-- decrements after use. Output: 120."},
    {id: 57, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    System.out.print(-1 >> 1);
  }
}`, o: [
        "-1",
        "0",
        "1",
        "Undefined"
      ], a: 0, e: "Right shift of signed negative number is implementation-defined but on most implementations (arithmetic shift), -1>>1 = -1 (sign bit preserved). Output: -1."},
    {id: 58, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int a = 10, b = 20, c = 30;
    System.out.print(((a < b ? 1 : 0) < c) ? 1 : 0);
  }
}`, o: [
        "1",
        "0",
        "30",
        "Compile Error"
      ], a: 0, e: "The chained comparison is represented step by step: true becomes 1, and 1 < 30 is true."},
    {id: 59, s: "C-OUT", t2: true, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 3; i++) {
      int innerI = 10;
      System.out.print(innerI + " ");
    }
  }
}`, o: [
        "10 10 10",
        "1 2 3",
        "Compile Error",
        "Infinite loop"
      ], a: 0, e: "Inner block declares a new i=10 shadowing loop variable. Each iteration the inner i=10 is printed. Outer loop i still increments. Output: 10 10 10."},
    {id: 60, s: "C-OUT", t2: false, q: "What is the output?", c: `class Main {
  public static void main(String[] args) {
    int x = 0b1010;
    int y = 0b0110;
    System.out.print((x & y) + " " + (x | y));
  }
}`, o: [
        "2 14",
        "8 14",
        "2 8",
        "10 6"
      ], a: 0, e: "x=10(decimal), y=6. AND: 1010 & 0110 = 0010 = 2. OR: 1010 | 0110 = 1110 = 14. Output: 2 14."},
    {id: 61, s: "PTR", q: "What does the following print?", c: `int a=10, *p=&a;
printf("%d %d", a, *p);`, o: [
        "10 10",
        "10 Address",
        "Address 10",
        "Compile Error"
      ], a: 0, e: "*p dereferences the pointer to get the value at the address. Both print the value 10."},
    {id: 62, s: "PTR", q: "What is the output?", c: `int a=5, *p=&a, **pp=&p;
printf("%d",**pp);`, o: [
        "Address",
        "5",
        "Garbage",
        "Compile Error"
      ], a: 1, e: "**pp dereferences twice: *pp=p (address of a), *p=5. Output: 5."},
    {id: 63, s: "PTR", q: "Which is a correct way to declare a pointer to an integer?", o: [
        "int p;",
        "int &p;",
        "int *p;",
        "*int p;"
      ], a: 2, e: "int *p; declares p as a pointer to int. The * must be before the variable name."},
    {id: 64, s: "PTR", q: "What is the output?", c: `int arr[]={10,20,30};
int *p=arr;
printf("%d",*(p++));
printf(" %d",*p);`, o: [
        "10 20",
        "20 20",
        "10 10",
        "20 30"
      ], a: 0, e: "*(p++) returns *p (=10) then increments p. After, p points to arr[1]=20. Output: 10 20."},
    {id: 65, s: "PTR", q: "What does \"int *p = NULL;\" mean?", o: [
        "p points to address 0 - accessing it is safe",
        "p is an uninitialized pointer",
        "p is a null pointer - accessing it causes undefined behavior/crash",
        "p stores the integer 0"
      ], a: 2, e: "NULL pointer means p doesn't point to valid memory. Dereferencing it is undefined behavior (segfault on most systems)."},
    {id: 66, s: "PTR", q: "What is the output?", c: `int a=10,b=20;
int *p=&a;
p=&b;
printf("%d",*p);`, o: [
        "10",
        "20",
        "Garbage",
        "Compile Error"
      ], a: 1, e: "p is reassigned to point to b. *p now gives b=20."},
    {id: 67, s: "PTR", q: "What is \"pointer arithmetic\"?", o: [
        "Performing bit operations on pointers",
        "Incrementing/decrementing a pointer moves it by sizeof the pointed-to type, not by 1 byte",
        "Casting a pointer to int",
        "Comparing two pointers"
      ], a: 1, e: "int *p; p++ advances p by sizeof(int)=4 bytes, pointing to the next integer in memory."},
    {id: 68, s: "PTR", q: "What is the output?", c: `int arr[]={1,2,3,4,5};
printf("%d", *(arr+3));`, o: [
        "3",
        "4",
        "5",
        "Compile Error"
      ], a: 1, e: "arr+3 = &arr[3]. *(arr+3) = arr[3] = 4. Output: 4."},
    {id: 69, s: "PTR", q: "Which of the following is a dangling pointer?", o: [
        "A pointer initialized to NULL",
        "A pointer whose pointed-to memory has been freed or gone out of scope",
        "A pointer declared as const",
        "A void pointer"
      ], a: 1, e: "Dangling pointer: points to memory that is no longer valid (freed heap, or stack variable that went out of scope). Using it is undefined behavior."},
    {id: 70, s: "PTR", q: "What is the output?", c: `void f(int *p){
  p++;
}
int main(){
  int a=5,*p=&a;
  f(p);
  printf("%d",*p);
}`, o: [
        "5",
        "6",
        "Garbage",
        "Compile Error"
      ], a: 0, e: "f receives a copy of the pointer p. Incrementing the copy doesn't affect the original p. *p still points to a=5. Output: 5."},
    {id: 71, s: "PTR", q: "What does \"const int *p\" mean?", o: [
        "The pointer p cannot be changed (pointer is const)",
        "The value pointed to by p cannot be changed (data is const)",
        "Both p and *p are const",
        "p is a pointer to a constant array"
      ], a: 1, e: "\"const int *p\" -> *p is const (cannot modify the integer value). p itself can be reassigned. Contrast \"int * const p\" where p cannot be reassigned."},
    {id: 72, s: "PTR", q: "What is the output?", c: `int a=10;
int *p=&a;
*p=*p*2;
printf("%d",a);`, o: [
        "10",
        "20",
        "5",
        "Compile Error"
      ], a: 1, e: "*p=*p*2 -> *p = 10*2 = 20. Since p=&a, this modifies a directly. Output: 20."},
    {id: 73, s: "PTR", q: "A void pointer (void *) is:", o: [
        "A pointer that points to nothing permanently",
        "A generic pointer that can point to any data type but must be cast before dereferencing",
        "Equivalent to NULL",
        "Only used for function pointers"
      ], a: 1, e: "void* is a universal pointer type in C. It can store any address but cannot be dereferenced directly without a cast to a specific type."},
    {id: 74, s: "PTR", q: "What is the output?", c: `char str[]="Josh";
char *p=str;
while(*p){
  printf("%c",*p);
  p++;
}`, o: [
        "Josh",
        "J",
        "hsoJ",
        "j o s h"
      ], a: 0, e: "Traverses string char by char. *p is falsy when null terminator '\\0' is reached. Output: Josh."},
    {id: 75, s: "PTR", q: "What is the output?", c: `int a=5;
int *p=&a;
int **pp=&p;
**pp=20;
printf("%d",a);`, o: [
        "5",
        "20",
        "Address",
        "Compile Error"
      ], a: 1, e: "**pp = 20 means *(*(pp)) = *p = 20 -> sets a to 20. Output: 20."},
    {id: 76, s: "PTR", q: "Which of the following function signatures correctly accepts an array?", o: [
        "void f(int arr[])",
        "void f(int *arr)",
        "Both A and B are equivalent",
        "void f(int arr)"
      ], a: 2, e: "When passing arrays to functions, both \"int arr[]\" and \"int *arr\" are equivalent - the array decays to a pointer."},
    {id: 77, s: "PTR", q: "What is a memory leak?", o: [
        "Stack overflow due to deep recursion",
        "Dynamically allocated memory that is never freed, causing growing memory usage",
        "A pointer pointing to freed memory",
        "Accessing an array out of bounds"
      ], a: 1, e: "Memory leak: malloc()/calloc() allocations that are never free()'d. In long-running programs this causes memory to run out."},
    {id: 78, s: "PTR", q: "What is the output?", c: `int arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};
printf("%d", *(*(arr+1)+2));`, o: [
        "5",
        "6",
        "7",
        "8"
      ], a: 1, e: "arr+1 = &arr[1]. *(arr+1) = arr[1]. *(arr+1)+2 = &arr[1][2]. *(*(arr+1)+2) = arr[1][2] = 6."},
    {id: 79, s: "PTR", q: "What does \"free(p)\" do?", o: [
        "Sets p to NULL",
        "Deallocates the heap memory pointed to by p; p itself becomes a dangling pointer unless set to NULL",
        "Crashes the program if p is NULL",
        "Frees the pointer variable itself"
      ], a: 1, e: "free() releases heap memory. It doesn't automatically set p=NULL. You should always do p=NULL after free to avoid dangling pointer bugs."},
    {id: 80, s: "PTR", q: "What is the difference between malloc and calloc?", o: [
        "No difference",
        "malloc(n,size) calloc(size); signatures are opposite",
        "calloc allocates n*size bytes AND initializes to zero; malloc does not initialize",
        "malloc is for arrays; calloc for single variables"
      ], a: 2, e: "malloc(size): allocates, uninitialized. calloc(n,size): allocates n x size bytes, zero-initialized. calloc is slightly slower due to zeroing."},
    {id: 81, s: "PTR", q: "What is the output?", c: `int a=10;
const int *p=&a;
a=20;
printf("%d",*p);`, o: [
        "10",
        "20",
        "Compile Error",
        "Garbage"
      ], a: 1, e: "\"const int *p\" means you can't modify a through p, but a itself can be modified directly. After a=20, *p reflects a's new value 20."},
    {id: 82, s: "PTR", q: "What is a function pointer?", o: [
        "A pointer stored inside a function",
        "A variable that stores the address of a function, allowing it to be called dynamically",
        "A pointer returned from a function",
        "An inline function"
      ], a: 1, e: "Function pointer: int (*fp)(int,int); stores the address of a function matching that signature. Used in callbacks, event handlers, and strategy patterns."},
    {id: 83, s: "PTR", q: "What is the output?", c: `int arr[]={5,10,15,20};
int *p=arr+1;
printf("%d %d",p[-1], p[1]);`, o: [
        "5 15",
        "10 20",
        "5 10",
        "Compile Error"
      ], a: 0, e: "p=arr+1=&arr[1]. p[-1]=arr[0]=5. p[1]=arr[2]=15. Output: 5 15."},
    {id: 84, s: "PTR", q: "Which operator gives the address of a variable?", o: [
        "*",
        "&",
        "->",
        "::"
      ], a: 1, e: "& (address-of) operator gives the memory address of a variable. * (dereference) operator gives the value at an address."},
    {id: 85, s: "PTR", q: "What is the output?", c: `int x=10;
int *p=&x;
printf("%d %d %d",x,*p,*&x);`, o: [
        "10 10 10",
        "10 Address 10",
        "Address Address 10",
        "Compile Error"
      ], a: 0, e: "All three access the same variable x. x=10, *p=10 (dereference), *&x = *(address of x) = x = 10. Output: 10 10 10."},
    {id: 86, s: "PTR", q: "What happens when you increment a pointer of type double (sizeof=8)?", o: [
        "It moves 1 byte forward",
        "It moves 4 bytes forward",
        "It moves 8 bytes forward",
        "It moves sizeof(double*) bytes forward"
      ], a: 2, e: "Pointer arithmetic: incrementing double *p moves p by sizeof(double)=8 bytes to point to the next double."},
    {id: 87, s: "PTR", q: "What is the output?", c: `int main(){
  int *p;
  printf("%d",*p);
}`, o: [
        "0",
        "Garbage or Crash",
        "NULL",
        "Compile Error"
      ], a: 1, e: "p is uninitialized - it contains a garbage address. Dereferencing it is undefined behavior, typically a segfault/crash."},
    {id: 88, s: "PTR", q: "Which of the following correctly swaps two integers using pointers?", c: `void swap(int *a, int *b){
  int t=*a; *a=*b; *b=t;
}`, o: [
        "Correct - swaps via dereferencing",
        "Wrong - a and b are copies",
        "Wrong - t should be a pointer",
        "Wrong - missing return value"
      ], a: 0, e: "Correct! t=*a saves a's value. *a=*b assigns b's value to a. *b=t restores a's original value to b. Actual values are swapped."},
    {id: 89, s: "PTR", q: "What is the output?", c: `int arr[]={1,2,3,4,5};
int *start=arr, *end=arr+4;
printf("%d",(int)(end-start));`, o: [
        "4",
        "16",
        "5",
        "Compile Error"
      ], a: 0, e: "Pointer subtraction gives the number of elements between them. end-start = 4 elements (indices 0 to 4). Output: 4."},
    {id: 90, s: "PTR", q: "What does \"p->member\" mean when p is a pointer to a struct?", o: [
        "It's the same as p.member",
        "It's shorthand for (*p).member - dereferences the pointer then accesses the member",
        "It declares a new member",
        "It copies the struct"
      ], a: 1, e: "\"->\" is the arrow operator. p->member is equivalent to (*p).member - it dereferences p and accesses the specified struct member."},
    {id: 91, s: "OOP", q: "What is the output?", c: `class A{
public:
  A(){cout<<"A";}
  ~A(){cout<<"~A";}
};
class B: public A{
public:
  B(){cout<<"B";}
  ~B(){cout<<"~B";}
};
int main(){ B b; }`, o: [
        "AB~A~B",
        "AB~B~A",
        "BA~A~B",
        "BA~B~A"
      ], a: 1, e: "Constructor order: base A first, then derived B. Destructor order is reverse: B first, then A. Output: AB~B~A."},
    {id: 92, s: "OOP", q: "What is the output?", c: `class Animal {
  void speak() { System.out.print("..."); }
}
class Dog extends Animal {
  void speak() { System.out.print("Woof"); }
}
class Main {
  public static void main(String[] args) {
    Animal a = new Dog();
    a.speak();
  }
}`, o: [
        "...",
        "Woof",
        "Compile Error",
        "Woof..."
      ], a: 1, e: "Java instance methods are dynamically dispatched, so Dog.speak() runs."},
    {id: 93, s: "OOP", q: "What is the output?", c: `class X {
  private int v;
  X(int a) { v = a; }
  int get() { return v; }
}
class Main {
  public static void main(String[] args) {
    X obj = new X(42);
    System.out.print(obj.get());
  }
}`, o: [
        "42",
        "0",
        "Compile Error",
        "Garbage"
      ], a: 0, e: "Initializer list sets v=42. get() returns v. Output: 42."},
    {id: 94, s: "OOP", q: "What is output when a virtual destructor is missing?", c: `class B{public: ~B(){cout<<"~B";}};
class D:public B{public: ~D(){cout<<"~D";}};
int main(){B *p=new D(); delete p;}`, o: [
        "~D~B",
        "~B",
        "~D",
        "Compile Error"
      ], a: 1, e: "Without virtual destructor, deleting via base pointer only calls base destructor ~B. Derived ~D is NOT called -> resource leak. Output: ~B."},
    {id: 95, s: "OOP", q: "Which OOP concept is demonstrated by function overloading?", o: [
        "Runtime polymorphism",
        "Encapsulation",
        "Compile-time (static) polymorphism",
        "Inheritance"
      ], a: 2, e: "Overloading (same name, different parameters) is resolved at compile time -> static polymorphism."},
    {id: 96, s: "OOP", q: "What is the output?", c: `class A {
  static void show() { System.out.print("A"); }
}
class B extends A {
  static void show() { System.out.print("B"); }
}
class Main {
  public static void main(String[] args) {
    A p = new B();
    p.show();
  }
}`, o: [
        "A",
        "B",
        "AB",
        "Compile Error"
      ], a: 0, e: "Static methods are hidden, not overridden, so the call through reference type A prints A."},
    {id: 97, s: "OOP", q: "In Java, which keyword prevents method overriding?", o: [
        "static",
        "abstract",
        "final",
        "private"
      ], a: 2, e: "\"final\" method in Java cannot be overridden in subclasses. \"final\" class cannot be extended."},
    {id: 98, s: "OOP", q: "What is the output?", c: `class Counter {
  static int cnt = 0;
  Counter() { cnt++; }
  static int get() { return cnt; }
}
class Main {
  public static void main(String[] args) {
    Counter a = new Counter(), b = new Counter(), c = new Counter();
    System.out.print(Counter.get());
  }
}`, o: [
        "0",
        "1",
        "3",
        "Compile Error"
      ], a: 2, e: "Static cnt is shared across all instances. 3 objects created -> cnt=3. Output: 3."},
    {id: 99, s: "OOP", q: "What does the \"super()\" call do in Java?", o: [
        "Creates a new superclass object",
        "Calls the parent class constructor from the child class constructor",
        "Calls the parent's static method",
        "Prevents the child constructor from running"
      ], a: 1, e: "super() in a constructor calls the immediate parent's constructor. Must be the first statement if used explicitly."},
    {id: 100, s: "OOP", q: "What is the output?", c: `class A {
  private int x;
  A(int v) { x = v; }
  A add(A b) { return new A(x + b.x); }
  void print() { System.out.print(x); }
}
class Main {
  public static void main(String[] args) {
    A a = new A(3), b = new A(4);
    A c = a.add(b);
    c.print();
  }
}`, o: [
        "7",
        "34",
        "3",
        "Compile Error"
      ], a: 0, e: "The add method returns a new A whose value is 3+4."},
    {id: 101, s: "OOP", q: "Abstract class in C++ is a class that:", o: [
        "Has only private members",
        "Has at least one pure virtual function (=0)",
        "Cannot have constructors",
        "Is marked with \"abstract\" keyword"
      ], a: 1, e: "A C++ class with at least one pure virtual function (virtual void f()=0) is abstract and cannot be instantiated."},
    {id: 102, s: "OOP", q: "What is the output?", c: `class A {
  A() { System.out.print("A("); }
  A(int x) { System.out.print("A(" + x + ")"); }
}
class Main {
  public static void main(String[] args) {
    A a1 = new A();
    A a2 = new A(5);
    A a3 = new A(7);
  }
}`, o: [
        "A()A(5)A(7)",
        "A(5)A(7)",
        "A()A(5)",
        "Compile Error"
      ], a: 0, e: "The three constructor calls print A(, then A(5), then A(7)."},
    {id: 103, s: "OOP", q: "The \"this\" pointer in C++ is:", o: [
        "A pointer to the class definition",
        "A pointer to the current object instance within a member function",
        "A pointer to the base class",
        "A global pointer to the last created object"
      ], a: 1, e: "\"this\" is an implicit parameter in every non-static member function pointing to the calling object."},
    {id: 104, s: "OOP", q: "What is the difference between public, private, and protected access specifiers?", o: [
        "All are identical in practice",
        "public: accessible everywhere; private: only within the class; protected: within class and subclasses",
        "private and protected are the same",
        "protected is more restrictive than private"
      ], a: 1, e: "Access: public=everywhere, protected=class + subclasses, private=class only. This is fundamental encapsulation control."},
    {id: 105, s: "OOP", q: "What is the output?", c: `class Box {
  int l, w, h;
  Box(int a, int b, int c) { l = a; w = b; h = c; }
  int volume() { return l * w * h; }
}
class Main {
  public static void main(String[] args) {
    Box b = new Box(2, 3, 4);
    System.out.print(b.volume());
  }
}`, o: [
        "24",
        "9",
        "24",
        "Compile Error"
      ], a: 0, e: "2x3x4=24. Output: 24."},
    {id: 106, s: "OOP", q: "Polymorphism in OOP means:", o: [
        "A class has multiple constructors",
        "One interface multiple implementations - same method call behaves differently based on the object type",
        "All methods are private",
        "A class inherits from multiple parents"
      ], a: 1, e: "Polymorphism = \"many forms.\" Key enabler of flexible, extensible code. Achieved via virtual functions (runtime) and overloading (compile-time)."},
    {id: 107, s: "OOP", q: "Which SOLID principle says \"a class should be open for extension, closed for modification\"?", o: [
        "S - Single Responsibility",
        "O - Open/Closed",
        "L - Liskov Substitution",
        "D - Dependency Inversion"
      ], a: 1, e: "Open/Closed Principle: add new behavior by writing new code (new classes/subclasses), not by modifying existing tested code."},
    {id: 108, s: "OOP", q: "What is the output?", c: `class A {
  void f() { System.out.print("A"); }
  static void g() { System.out.print("AG"); }
}
class B extends A {
  void f() { System.out.print("B"); }
  static void g() { System.out.print("BG"); }
}
class Main {
  public static void main(String[] args) {
    A p = new B();
    p.f();
    p.g();
  }
}`, o: [
        "BA",
        "ABBG",
        "BAG",
        "B AG"
      ], a: 2, e: "The instance method f dispatches to B, while static g is resolved from reference type A."},
    {id: 109, s: "OOP", q: "What is a copy constructor?", o: [
        "A constructor that copies the class definition",
        "A constructor called to create a new object as a copy of an existing object of the same class",
        "A constructor with no parameters",
        "A constructor that overrides the assignment operator"
      ], a: 1, e: "Copy constructor: ClassName(const ClassName &other). Called when: pass by value, return by value, or initialize with existing object."},
    {id: 110, s: "OOP", q: "Friend function in C++ can:", o: [
        "Only access public members",
        "Access all (private, protected, public) members of the class it's a friend of",
        "Only be declared inside the class",
        "Override virtual functions"
      ], a: 1, e: "A friend function is not a member but is granted access to all private and protected members of the class that declared it."},
    {id: 111, s: "OOP", q: "What is the Diamond Problem in OOP?", o: [
        "Recursion in constructors",
        "When a class inherits from two classes that both inherit from the same base class, causing ambiguity",
        "Circular references in pointers",
        "Buffer overflow in arrays"
      ], a: 1, e: "Diamond: D inherits from B and C, both inherit from A. D has two copies of A's members. Solved in C++ with virtual inheritance, avoided in Java by disallowing multiple class inheritance."},
    {id: 112, s: "OOP", q: "What is the output?", c: `class A {
  private int x = 5;
  int getX() { return x; }
}
class Main {
  public static void main(String[] args) {
    A a1 = new A(), a2 = new A();
    a1.x = 10;
    System.out.print(a1.getX());
  }
}`, o: [
        "10",
        "5",
        "Compile Error",
        "0"
      ], a: 2, e: "x is private, so assigning a1.x from Main is a compile-time error."},
    {id: 113, s: "OOP", q: "Interface vs Abstract Class - key difference:", o: [
        "No difference",
        "An interface has no implementation at all (pure abstract); abstract class can have some concrete methods and state",
        "Abstract class has no implementation",
        "Interface can have constructors"
      ], a: 1, e: "Interface: only method contracts (no state, no implementation pre-Java 8). Abstract class: mix of abstract and concrete methods, can have fields and constructors."},
    {id: 114, s: "OOP", q: "What is the output?", c: `class A {
  int x;
  A() { x = 0; }
}
class B extends A {
  B() { super(); x = 5; }
}
class Main {
  public static void main(String[] args) {
    B b = new B();
    System.out.print(b.x);
  }
}`, o: [
        "0",
        "5",
        "Compile Error",
        "Garbage"
      ], a: 1, e: "A() sets x=0, then B() sets x=5. Output: 5."},
    {id: 115, s: "OOP", q: "The Singleton design pattern ensures:", o: [
        "Multiple instances can be created efficiently",
        "Only one instance of the class exists, with global access",
        "Every thread gets its own instance",
        "Each module gets its own instance"
      ], a: 1, e: "Singleton: private constructor + static instance variable + static getInstance() method. Used for loggers, configs, connection pools."},
    {id: 116, s: "OOP", q: "What is function hiding in C++?", o: [
        "Making a function private",
        "When a derived class defines a function with the same name as a base class function (even different signature), it hides ALL base class overloads",
        "Using static functions",
        "Using inline functions"
      ], a: 1, e: "If derived class defines foo(), ALL overloads of foo() in base are hidden (not just the matching one). Use \"using Base::foo;\" to unhide."},
    {id: 117, s: "OOP", q: "What is the output?", c: `class A {
  void show(int x) { System.out.print("int:" + x); }
  void show(double x) { System.out.print("dbl:" + x); }
}
class Main {
  public static void main(String[] args) {
    A a = new A();
    a.show(5);
    System.out.print(" ");
    a.show(3.14);
  }
}`, o: [
        "int:5 dbl:3.14",
        "Compile Error",
        "int:5 int:3",
        "dbl:5 dbl:3.14"
      ], a: 0, e: "Overloaded show() - compiler selects based on argument type. 5->int, 3.14->double. Output: int:5dbl:3.14."},
    {id: 118, s: "OOP", q: "In Java, all classes implicitly extend:", o: [
        "AbstractObject",
        "Serializable",
        "Object",
        "Comparable"
      ], a: 2, e: "In Java, every class implicitly extends java.lang.Object, which provides methods like toString(), equals(), hashCode(), getClass()."},
    {id: 119, s: "OOP", q: "What is the output?", c: `class A {
  static void f() { System.out.print("A::f"); }
  void g() { System.out.print("A::g"); }
}
class B extends A {
  static void f() { System.out.print("B::f"); }
  void g() { System.out.print("B::g"); }
}
class Main {
  public static void main(String[] args) {
    B b = new B();
    A r = b;
    r.f();
    r.g();
  }
}`, o: [
        "A::f A::g",
        "B::f B::g",
        "A::f B::g",
        "B::f A::g"
      ], a: 2, e: "Static f is resolved from reference type A, while instance g dispatches to B."},
    {id: 120, s: "OOP", q: "Operator overloading in C++ allows:", o: [
        "Changing the meaning of operators for user-defined types",
        "Using operators in macros",
        "Deleting built-in operators",
        "Creating new operators"
      ], a: 0, e: "Operator overloading lets you define how operators (+,-,*,<<,etc.) work with your class objects."},
    {id: 121, s: "OOP", q: "What is a pure virtual function in C++?", o: [
        "A virtual function that is private",
        "A virtual function with no body: virtual void f()=0; that derived classes must override",
        "A virtual function in a template class",
        "A static virtual function"
      ], a: 1, e: "Pure virtual: virtual void f()=0; makes the class abstract. Derived classes MUST provide an implementation, or they too become abstract."},
    {id: 122, s: "OOP", q: "What is method overriding?", o: [
        "Declaring multiple methods with the same name but different parameters",
        "Providing a new implementation of a parent class method in a child class with the SAME signature",
        "Making a method private in the child class",
        "Calling a method multiple times"
      ], a: 1, e: "Overriding: child class redefines a parent's method with the same name, parameters, and return type. Enables runtime polymorphism when the method is virtual."},
    {id: 123, s: "OOP", q: "What is the output?", c: `class A {
  static int n = 0;
  A() { n++; }
}
class Main {
  public static void main(String[] args) {
    A a1 = new A(), a2 = new A(), a3 = new A();
    System.out.print(A.n);
    { A a4 = new A(); }
    System.out.print(A.n);
  }
}`, o: [
        "34",
        "33",
        "44",
        "Compile Error"
      ], a: 0, e: "3 objects in main create n=3. Print 3. Block creates a4 -> n=4. Print 4. Output: 34."},
    {id: 124, s: "OOP", q: "What is the \"Rule of Three\" in C++?", o: [
        "A class can have max 3 constructors",
        "If you define any of: destructor, copy constructor, or copy assignment operator, you should define all three",
        "A class should inherit from max 3 bases",
        "Each method should be max 3 lines"
      ], a: 1, e: "Rule of Three: if you manage resources (heap memory), you need all three to handle them correctly. (Rule of Five in C++11 adds move constructor and move assignment.)"},
    {id: 125, s: "OOP", q: "What is the output?", c: `class A {
  int x;
  A(int v) { x = v; }
  boolean lessThan(A b) { return x < b.x; }
}
class Main {
  public static void main(String[] args) {
    A a = new A(3), b = new A(5);
    System.out.print((a.lessThan(b) ? 1 : 0) + " " + (b.lessThan(a) ? 1 : 0));
  }
}`, o: [
        "1 0",
        "0 1",
        "1 1",
        "Compile Error"
      ], a: 0, e: "3 < 5 is true and 5 < 3 is false, printed as 1 0."},
    {id: 126, s: "DSA", q: "What is the time complexity of searching for an element in a balanced BST?", o: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ], a: 1, e: "BST height for balanced tree is O(log n). Search visits at most one node per level -> O(log n)."},
    {id: 127, s: "DSA", q: "Which data structure allows O(1) insertion and deletion at both ends?", o: [
        "Stack",
        "Array",
        "Deque",
        "Priority Queue"
      ], a: 2, e: "Deque (double-ended queue) supports O(1) push/pop at both front and rear."},
    {id: 128, s: "DSA", q: "The output of Inorder traversal of a BST is:", o: [
        "Random order",
        "Descending order",
        "Ascending (sorted) order",
        "Level-wise order"
      ], a: 2, e: "Inorder (Left->Root->Right) visits BST nodes in ascending order. This is a key BST property."},
    {id: 129, s: "DSA", q: "What is the worst-case time complexity of QuickSort?", o: [
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        "O(log n)"
      ], a: 2, e: "Already-sorted input with first/last element as pivot -> O(n^2). Randomized pivot avoids this."},
    {id: 130, s: "DSA", q: "A Min-Heap satisfies the property that:", o: [
        "Every parent > both children",
        "Every parent <= both children (root is minimum)",
        "Left child < right child always",
        "Leaves are sorted"
      ], a: 1, e: "Min-Heap: parent <= children at every level. Root = global minimum. Opposite for Max-Heap."},
    {id: 131, s: "DSA", q: "What is the time complexity of building a heap from n unsorted elements?", o: [
        "O(n log n)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
      ], a: 1, e: "Bottom-up heapify = O(n) (amortized proof using summation of geometric series). This is more efficient than inserting one by one (O(n log n))."},
    {id: 132, s: "DSA", q: "Which of the following is NOT a stable sorting algorithm?", o: [
        "Merge Sort",
        "Bubble Sort",
        "Heap Sort",
        "Insertion Sort"
      ], a: 2, e: "Heap Sort is not stable - it rearranges elements in a way that does not preserve the original relative order of equal elements."},
    {id: 133, s: "DSA", q: "What data structure does BFS use?", o: [
        "Stack",
        "Queue",
        "Priority Queue",
        "Hash Map"
      ], a: 1, e: "BFS uses a Queue (FIFO) to explore nodes level by level."},
    {id: 134, s: "DSA", q: "What data structure does DFS use?", o: [
        "Queue",
        "Hash Map",
        "Stack (or recursion call stack)",
        "Heap"
      ], a: 2, e: "DFS uses a stack - either explicitly or via the system call stack during recursion."},
    {id: 135, s: "DSA", q: "The number of nodes in a full binary tree with height h is at most:", o: [
        "2h",
        "2h+1",
        "2^(h+1)-1",
        "h^2"
      ], a: 2, e: "A full/complete binary tree of height h has at most 2^(h+1)-1 nodes (1+2+4+...+2^h)."},
    {id: 136, s: "DSA", q: "What is the time complexity of Floyd-Warshall all-pairs shortest paths?", o: [
        "O(V^2)",
        "O(V^2E)",
        "O(V^3)",
        "O(E log V)"
      ], a: 2, e: "Floyd-Warshall: 3 nested loops each running V times = O(V^3)."},
    {id: 137, s: "DSA", q: "A stack can be implemented using which of the following?", o: [
        "Queue only",
        "Two queues",
        "Array or Linked List",
        "Binary Tree only"
      ], a: 2, e: "Stack can be implemented with an array (using top index) or linked list (insert/delete at head)."},
    {id: 138, s: "DSA", q: "What is the amortized time complexity of push on a dynamic array?", o: [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n^2)"
      ], a: 2, e: "Doubling strategy: most pushes are O(1). Occasional O(n) resize amortized over n operations = O(1) each."},
    {id: 139, s: "DSA", q: "Dijkstra's algorithm fails with:", o: [
        "Disconnected graphs",
        "Negative-weight edges",
        "Directed graphs",
        "Dense graphs"
      ], a: 1, e: "Dijkstra's greedy assumption breaks with negative weights. Use Bellman-Ford for graphs with negative edges."},
    {id: 140, s: "DSA", q: "The recurrence T(n)=2T(n/2)+O(n) solves to:", o: [
        "O(n)",
        "O(n^2)",
        "O(n log n)",
        "O(log n)"
      ], a: 2, e: "By Master Theorem case 2: a=2, b=2, f(n)=O(n), n^log_b(a)=n^1 -> same -> T(n)=O(n log n). This is Merge Sort."},
    {id: 141, s: "DSA", q: "Which tree traversal visits root FIRST, then left, then right?", o: [
        "Inorder",
        "Postorder",
        "Preorder",
        "Level order"
      ], a: 2, e: "Preorder: Root -> Left -> Right. Used to copy/serialize a tree."},
    {id: 142, s: "DSA", q: "What is a topological sort?", o: [
        "Sorting numbers in ascending order",
        "A linear ordering of vertices in a DAG such that every directed edge u->v has u before v",
        "Sorting a BST",
        "A variation of BFS"
      ], a: 1, e: "Topological sort applies only to DAGs (Directed Acyclic Graphs). Used for dependency resolution, build systems, course prerequisites."},
    {id: 143, s: "DSA", q: "Which algorithm finds the Minimum Spanning Tree?", o: [
        "Dijkstra and Floyd-Warshall",
        "Kruskal and Prim",
        "BFS and DFS",
        "Bellman-Ford and A*"
      ], a: 1, e: "Kruskal (greedily adds smallest edge not forming cycle) and Prim (grows MST from a starting vertex) both find the MST."},
    {id: 144, s: "DSA", q: "In a circular linked list, the last node:", o: [
        "Points to NULL",
        "Points to the first node",
        "Points to itself",
        "Is always empty"
      ], a: 1, e: "Circular linked list: the next pointer of the last node points back to the head, making it a cycle."},
    {id: 145, s: "DSA", q: "What is a hash collision?", o: [
        "Two hash tables with the same size",
        "When two different keys hash to the same index",
        "A failed hash table lookup",
        "Overflow of the hash table"
      ], a: 1, e: "Collision: hash(k1) = hash(k2) for k1 != k2. Resolved by chaining (linked lists at each slot) or open addressing (probing)."},
    {id: 146, s: "DSA", q: "Which sorting algorithm is most efficient for nearly-sorted data?", o: [
        "Quick Sort",
        "Merge Sort",
        "Insertion Sort",
        "Selection Sort"
      ], a: 2, e: "Insertion Sort is O(n) for nearly-sorted data (few inversions). Each element moves only a short distance."},
    {id: 147, s: "DSA", q: "The time complexity of finding maximum/minimum element in an unsorted array is:", o: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ], a: 2, e: "Must scan every element to find max/min -> O(n). No shortcut without sorting."},
    {id: 148, s: "DSA", q: "In a binary tree, a node with no children is called:", o: [
        "Root",
        "Internal node",
        "Leaf node",
        "Parent"
      ], a: 2, e: "Leaf node = node with no children (both left and right children are NULL)."},
    {id: 149, s: "DSA", q: "The space complexity of recursive DFS on a graph with V vertices and E edges is:", o: [
        "O(V+E)",
        "O(V)",
        "O(E)",
        "O(1)"
      ], a: 1, e: "Recursive DFS call stack depth is at most V in the worst case (a path graph). Space = O(V)."},
    {id: 150, s: "DSA", q: "Which data structure is used in Prim's MST algorithm for efficient implementation?", o: [
        "Stack",
        "Queue",
        "Min-Heap / Priority Queue",
        "Hash Table"
      ], a: 2, e: "Min-heap stores (cost, vertex) pairs, allowing O(log V) extraction of the minimum-cost unvisited vertex."},
    {id: 151, s: "DSA", q: "Postorder traversal visits nodes in which order?", o: [
        "Root, Left, Right",
        "Left, Root, Right",
        "Left, Right, Root",
        "Right, Left, Root"
      ], a: 2, e: "Postorder: Left -> Right -> Root. Used to delete a tree or evaluate postfix expressions."},
    {id: 152, s: "DSA", q: "A degenerate (skewed) BST has what performance for search?", o: [
        "O(log n)",
        "O(n)",
        "O(1)",
        "O(n^2)"
      ], a: 1, e: "A fully skewed BST (like a linked list) has height n, making search O(n). This is why balanced BSTs (AVL, Red-Black) are preferred."},
    {id: 153, s: "DSA", q: "Which algorithm uses \"divide and conquer\"?", o: [
        "Bubble Sort and Insertion Sort",
        "Merge Sort and Quick Sort",
        "Counting Sort and Radix Sort",
        "Floyd-Warshall and Dijkstra"
      ], a: 1, e: "Divide and Conquer: split problem, solve sub-problems, combine. Merge Sort and Quick Sort are classic examples."},
    {id: 154, s: "DSA", q: "What is the output of the following linked list reversal logic? List: 1->2->3->4->NULL", c: "// After reversing:", o: [
        "4->3->2->1->NULL",
        "1->2->3->4->NULL",
        "4->3->2->NULL",
        "NULL->1->2->3->4"
      ], a: 0, e: "Reversing 1->2->3->4 gives 4->3->2->1->NULL."},
    {id: 155, s: "DSA", q: "Which of the following has O(1) time for both push and pop?", o: [
        "Array (unsorted)",
        "Stack (using linked list or array with top pointer)",
        "Queue (using array)",
        "Binary Search Tree"
      ], a: 1, e: "Stack push and pop at the top are O(1) regardless of implementation (array with top index or singly linked list with head pointer)."},
    {id: 156, s: "DSA", q: "Counting Sort works in O(n+k) time. k represents:", o: [
        "Number of distinct elements",
        "The range of input values (max-min+1)",
        "log of n",
        "Number of comparisons"
      ], a: 1, e: "Counting Sort creates a frequency array of size k (the range of values). Total time = O(n) to count + O(k) to output = O(n+k)."},
    {id: 157, s: "DSA", q: "Which traversal of a tree uses level-by-level processing?", o: [
        "Preorder",
        "Inorder",
        "Postorder",
        "Level-order (BFS)"
      ], a: 3, e: "Level-order traversal (BFS) uses a queue to visit all nodes at depth d before any node at depth d+1."},
    {id: 158, s: "DSA", q: "The time complexity of inserting a node at the end of a singly linked list (with tail pointer) is:", o: [
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n^2)"
      ], a: 2, e: "With a tail pointer, insert at end: update tail.next and tail -> O(1). Without tail pointer, traverse to end -> O(n)."},
    {id: 159, s: "DSA", q: "A valid AVL tree has what property?", o: [
        "Height difference <= 2 at every node",
        "All leaves at the same level",
        "Height difference <= 1 at every node (|left_height - right_height| <= 1)",
        "It's always a complete binary tree"
      ], a: 2, e: "AVL invariant: balance factor (|left_height - right_height|) must be 0 or 1 at every node."},
    {id: 160, s: "DSA", q: "What is a graph that contains no cycles?", o: [
        "Complete graph",
        "DAG (Directed Acyclic Graph)",
        "Dense graph",
        "Both B and \"tree/forest\""
      ], a: 3, e: "A tree is an acyclic connected undirected graph. A DAG is a directed graph with no directed cycles. Both are acyclic structures."},
    {id: 161, s: "DSA", q: "Which of the following is used to check balanced parentheses?", o: [
        "Queue",
        "Stack",
        "Heap",
        "Graph"
      ], a: 1, e: "Stack: push opening brackets, pop when matching closing bracket found. If stack is empty at end and each closing matches top -> balanced."},
    {id: 162, s: "DSA", q: "Binary search requires:", o: [
        "Unsorted array",
        "Sorted array or sorted structure",
        "Linked list",
        "Hash table"
      ], a: 1, e: "Binary search works by comparing the target with the middle element and eliminating half the array each time - requires sorted input."},
    {id: 163, s: "DSA", q: "The maximum height of an AVL tree with n nodes is approximately:", o: [
        "n",
        "n/2",
        "1.44 log2(n)",
        "sqrt(n)"
      ], a: 2, e: "AVL trees maintain height <= 1.44 log2(n), guaranteeing O(log n) operations."},
    {id: 164, s: "DSA", q: "Merge Sort is preferred over Quick Sort when:", o: [
        "Data fits in cache",
        "Stability is required or worst-case O(n log n) is needed",
        "Random pivot selection is possible",
        "Data is nearly sorted"
      ], a: 1, e: "Merge Sort: stable, O(n log n) worst-case. Quick Sort: unstable, O(n^2) worst-case. For stable sort or linked lists, Merge Sort wins."},
    {id: 165, s: "DSA", q: "What is the time complexity of inserting into a hash table with chaining, assuming uniform hashing and load factor alpha?", o: [
        "O(1)",
        "O(alpha)",
        "O(n)",
        "O(log n)"
      ], a: 1, e: "Expected time to insert = O(1 + alpha) where alpha = n/m (load factor). With alpha = O(1), it's O(1)."},
    {id: 166, s: "SQL", q: "What does the following query return?", c: `SELECT COUNT(*) FROM Employee 
WHERE salary > 50000;`, o: [
        "Sum of salaries above 50000",
        "Number of employees with salary > 50000",
        "List of all employees",
        "Names of employees with salary > 50000"
      ], a: 1, e: "COUNT(*) returns the count of rows matching the WHERE condition - number of employees with salary > 50000."},
    {id: 167, s: "SQL", q: "What is the output/result of INNER JOIN?", c: `Table A: id{1,2,3}  Table B: id{2,3,4}
SELECT A.id FROM A INNER JOIN B ON A.id=B.id;`, o: [
        "1,2,3",
        "2,3,4",
        "2,3",
        "1,2,3,4"
      ], a: 2, e: "INNER JOIN returns only matching rows: ids 2 and 3 exist in both tables."},
    {id: 168, s: "SQL", q: "What does GROUP BY do in SQL?", o: [
        "Sorts the result set",
        "Filters rows before aggregation",
        "Groups rows with the same value in specified column(s) for aggregation",
        "Joins two tables"
      ], a: 2, e: "GROUP BY collapses rows with the same column value(s) into one group, enabling aggregate functions (SUM, COUNT, AVG) per group."},
    {id: 169, s: "SQL", q: "What is the difference between WHERE and HAVING?", o: [
        "No difference",
        "WHERE filters rows before grouping; HAVING filters groups after GROUP BY aggregation",
        "HAVING filters rows; WHERE filters groups",
        "WHERE works on aggregates; HAVING on individual rows"
      ], a: 1, e: "WHERE: row-level filter before grouping. HAVING: group-level filter after GROUP BY. You cannot use aggregate functions in WHERE."},
    {id: 170, s: "SQL", q: "What does the following return?", c: `SELECT name FROM Employee 
ORDER BY salary DESC LIMIT 1;`, o: [
        "Employee with lowest salary",
        "Employee with highest salary",
        "All employees sorted by salary",
        "Count of employees"
      ], a: 1, e: "ORDER BY salary DESC sorts highest first. LIMIT 1 returns only the first row = highest-paid employee."},
    {id: 171, s: "SQL", q: "What is a PRIMARY KEY constraint?", o: [
        "Can be NULL and non-unique",
        "Must be unique and NOT NULL; uniquely identifies each row",
        "Can be duplicated within a table",
        "Is the same as FOREIGN KEY"
      ], a: 1, e: "Primary Key: unique identifier for each row. Cannot be NULL. A table can have only one primary key (can be composite)."},
    {id: 172, s: "SQL", q: "What does the following query do?", c: "SELECT DISTINCT dept FROM Employee;", o: [
        "Returns all departments including duplicates",
        "Returns unique department values only",
        "Returns employees grouped by department",
        "Returns department count"
      ], a: 1, e: "DISTINCT removes duplicate values. Returns each department name only once regardless of how many employees are in it."},
    {id: 173, s: "SQL", q: "What does LEFT JOIN return when there is no match in the right table?", o: [
        "Row is excluded",
        "NULL is returned for right table columns",
        "Error is thrown",
        "Right table's first row is used"
      ], a: 1, e: "LEFT JOIN: all rows from left table; if no match in right, right-side columns are NULL. Used to find unmatched records."},
    {id: 174, s: "SQL", q: "What is the result of this query?", c: `SELECT dept, AVG(salary) as avg_sal 
FROM Employee 
GROUP BY dept 
HAVING AVG(salary) > 60000;`, o: [
        "All departments with their average salaries",
        "Only departments where the average salary exceeds 60000",
        "All employees with salary > 60000",
        "Count of departments"
      ], a: 1, e: "HAVING AVG(salary)>60000 filters the grouped results, keeping only departments whose average salary is above 60000."},
    {id: 175, s: "SQL", q: "Which SQL command is used to add a new row to a table?", o: [
        "UPDATE",
        "ALTER",
        "INSERT INTO",
        "ADD ROW"
      ], a: 2, e: "INSERT INTO table_name (col1,col2) VALUES (val1,val2); adds a new row."},
    {id: 176, s: "SQL", q: "What does TRUNCATE TABLE do?", o: [
        "Deletes specific rows based on a condition",
        "Removes all rows from a table quickly without logging individual row deletions, but keeps the structure",
        "Drops the table and its structure",
        "Deletes only NULL rows"
      ], a: 1, e: "TRUNCATE is faster than DELETE (no row-by-row logging) but cannot be used with WHERE. It keeps the table structure."},
    {id: 177, s: "SQL", q: "What is a subquery?", o: [
        "A query that runs on a subset of columns",
        "A query nested inside another query",
        "A stored procedure",
        "A view"
      ], a: 1, e: "Subquery (nested query): SELECT inside another SELECT/INSERT/UPDATE/DELETE. Can be correlated (references outer query) or non-correlated."},
    {id: 178, s: "SQL", q: "What does the following query return?", c: `SELECT name FROM Employee 
WHERE dept IN ('IT','HR');`, o: [
        "Employees NOT in IT or HR",
        "Employees in IT department only",
        "Employees in either IT or HR department",
        "Count of IT and HR employees"
      ], a: 2, e: "IN clause: matches any value in the specified list. Returns employees whose dept is IT or HR."},
    {id: 179, s: "SQL", q: "What is a SQL VIEW?", o: [
        "A physical copy of a table",
        "A virtual table defined by a SELECT query stored as a named object",
        "An index on multiple columns",
        "A temporary table that auto-deletes"
      ], a: 1, e: "VIEW: saved SELECT query that behaves like a table. Provides abstraction, security (expose only certain columns), and simplifies complex queries."},
    {id: 180, s: "SQL", q: "Which of the following finds duplicate names in a table?", c: `SELECT name, COUNT(*) 
FROM Employee 
GROUP BY name 
HAVING COUNT(*) > 1;`, o: [
        "Names with no duplicates",
        "Names appearing more than once (duplicates)",
        "All distinct names",
        "Count of all employees"
      ], a: 1, e: "GROUP BY name groups same names. HAVING COUNT(*)>1 filters to only those appearing more than once = duplicates."},
    {id: 181, s: "SQL", q: "What does the NOT NULL constraint ensure?", o: [
        "Column can store NULL values",
        "Column must always have a non-NULL value when inserting/updating",
        "Column is the primary key",
        "Column is indexed"
      ], a: 1, e: "NOT NULL constraint prevents inserting a NULL value into that column. Every row must provide a valid value."},
    {id: 182, s: "SQL", q: "The UNION operator in SQL:", o: [
        "Returns all rows including duplicates from two queries",
        "Combines results of two SELECT queries, removing duplicates (like mathematical union)",
        "Performs a JOIN",
        "Returns only matching rows"
      ], a: 1, e: "UNION combines result sets and removes duplicates. UNION ALL keeps all rows including duplicates (faster)."},
    {id: 183, s: "SQL", q: "What is the result of: SELECT 5/2, 5.0/2, 5%2 in SQL?", o: [
        "2, 2.5, 1",
        "2.5, 2.5, 1",
        "2, 2.500000, 1",
        "2, 2, 1"
      ], a: 2, e: "5/2 = integer division = 2. 5.0/2 = float = 2.5 (formatted as 2.500000). 5%2 = remainder = 1."},
    {id: 184, s: "SQL", q: "What does the LIKE operator do?", c: "SELECT * FROM Employee WHERE name LIKE 'A%';", o: [
        "Names exactly equal to \"A%\"",
        "Names containing the letter A anywhere",
        "Names starting with the letter A",
        "Names ending with the letter A"
      ], a: 2, e: "LIKE with % wildcard: \"A%\" matches any string starting with A. \"%A\" ends with A. \"%A%\" contains A anywhere."},
    {id: 185, s: "SQL", q: "What is a FOREIGN KEY?", o: [
        "A key used for encryption",
        "A column that references the PRIMARY KEY of another table, enforcing referential integrity",
        "Any non-primary key column",
        "A key that is always NULL"
      ], a: 1, e: "FOREIGN KEY links two tables. It ensures that the value in the FK column exists in the referenced primary key column -> referential integrity."},
    {id: 186, s: "SQL", q: "Which of the following returns the second highest salary?", c: `SELECT MAX(salary) FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);`, o: [
        "Highest salary",
        "Second highest salary",
        "All salaries below maximum",
        "Count of distinct salaries"
      ], a: 1, e: "Inner query finds max salary. Outer query finds max salary BELOW the overall max = second highest."},
    {id: 187, s: "SQL", q: "What does the COALESCE function do?", o: [
        "Combines two strings",
        "Returns the first non-NULL value in a list of arguments",
        "Counts non-NULL values",
        "Converts NULL to 0 always"
      ], a: 1, e: "COALESCE(a,b,c) returns the first non-NULL argument. Useful for substituting default values for NULLs."},
    {id: 188, s: "SQL", q: "What is an INDEX in a database?", o: [
        "A constraint that ensures uniqueness",
        "A data structure that improves SELECT query speed at the cost of slower writes and extra storage",
        "A synonym for PRIMARY KEY",
        "A way to sort rows permanently"
      ], a: 1, e: "Index (usually B+ tree): allows O(log n) lookup instead of O(n) full table scan. Speeds reads, slows down INSERT/UPDATE/DELETE."},
    {id: 189, s: "SQL", q: "What does the following return?", c: `SELECT name FROM Employee 
WHERE salary IS NULL;`, o: [
        "Employees with salary = 0",
        "Employees with no salary value (NULL)",
        "Employees with any salary",
        "Error - cannot use IS with salary"
      ], a: 1, e: "IS NULL correctly checks for NULL values. You cannot use =NULL (it always returns false). Always use IS NULL or IS NOT NULL."},
    {id: 190, s: "SQL", q: "What is the difference between DELETE and DROP?", o: [
        "No difference",
        "DELETE removes specific rows (DML, can rollback); DROP removes the entire table structure and data (DDL, cannot rollback)",
        "DROP removes rows; DELETE removes the table",
        "Both are identical DML commands"
      ], a: 1, e: "DELETE: DML, removes rows, can use WHERE, can be rolled back. DROP: DDL, removes table permanently, cannot be rolled back in most DBs."},
    {id: 191, s: "OS", q: "What is a race condition?", o: [
        "A competition between two CPUs",
        "When two or more threads access shared data concurrently and the outcome depends on timing of their execution",
        "A CPU scheduling problem",
        "A deadlock between exactly two processes"
      ], a: 1, e: "Race condition: non-deterministic behavior due to concurrent access to shared state without proper synchronization."},
    {id: 192, s: "OS", q: "What is the purpose of a mutex?", o: [
        "To speed up thread creation",
        "To provide mutual exclusion - only one thread can hold the mutex and enter the critical section at a time",
        "To kill deadlocked threads",
        "To manage virtual memory"
      ], a: 1, e: "Mutex (mutual exclusion lock): thread acquires before entering critical section, releases on exit. Others block until it's free."},
    {id: 193, s: "OS", q: "What does the fork() system call return?", o: [
        "0 in parent, child PID in child",
        "Child PID in parent, 0 in child",
        "Same PID in both",
        "-1 always"
      ], a: 1, e: "fork() returns child PID in parent, 0 in child, -1 on error. This is how a program knows which role it plays."},
    {id: 194, s: "OS", q: "What is virtual memory?", o: [
        "RAM that can be upgraded",
        "An abstraction that gives each process the illusion of a large contiguous address space, using disk as extension",
        "Shared memory between processes",
        "Memory used only by the kernel"
      ], a: 1, e: "Virtual memory lets processes use more address space than physical RAM. Pages are loaded from disk on demand (demand paging)."},
    {id: 195, s: "OS", q: "Which page replacement algorithm is theoretically optimal but not practically implementable?", o: [
        "LRU",
        "FIFO",
        "OPT (Optimal)",
        "Clock"
      ], a: 2, e: "OPT replaces the page not used for the longest future time. Optimal page fault rate, but requires future knowledge -> not implementable."},
    {id: 196, s: "OS", q: "What is the difference between a process and a thread?", o: [
        "No difference",
        "Process: independent execution with its own memory space; Thread: lightweight execution unit sharing memory with other threads in the same process",
        "Thread has more memory than process",
        "Process is always single-threaded"
      ], a: 1, e: "Key: processes are isolated (separate address space); threads share address space (code, heap, data) but have separate stacks and registers."},
    {id: 197, s: "OS", q: "What is thrashing in an OS?", o: [
        "High CPU temperature",
        "OS spends more time swapping pages in/out (page faults) than executing process instructions",
        "Too many context switches",
        "Memory corruption"
      ], a: 1, e: "Thrashing: high multiprogramming + insufficient frames -> constant page faults -> CPU utilization drops -> OS adds more processes -> worse."},
    {id: 198, s: "OS", q: "Round Robin scheduling works by:", o: [
        "Running the shortest job first",
        "Giving each process a fixed time quantum in rotation, preempting if it exceeds the quantum",
        "Running processes by priority",
        "Running longest job first"
      ], a: 1, e: "RR: each process gets CPU for a time quantum (e.g., 10ms). If not done, it goes to back of ready queue. Fair, prevents starvation."},
    {id: 199, s: "OS", q: "What is a deadlock?", o: [
        "Process running too long",
        "A situation where two or more processes are permanently blocked waiting for resources held by each other",
        "High CPU usage",
        "Memory overflow"
      ], a: 1, e: "Deadlock: circular wait for resources. Process A holds R1 and waits for R2; Process B holds R2 and waits for R1 -> neither can proceed."},
    {id: 200, s: "OS", q: "What is the Translation Lookaside Buffer (TLB)?", o: [
        "Full copy of page table in fast memory",
        "A small, fast cache that stores recently used page-table entries to speed up virtual address translation",
        "A buffer for disk I/O",
        "A CPU register file"
      ], a: 1, e: "TLB hit: VA->PA in ~1-2ns. TLB miss: walk page table in DRAM (~100ns). TLB hit rate ~99% in typical workloads."},
    {id: 201, s: "OS", q: "The Banker's Algorithm is used for:", o: [
        "Process scheduling",
        "Deadlock avoidance by checking whether a resource allocation keeps the system in a safe state",
        "Memory allocation",
        "CPU burst estimation"
      ], a: 1, e: "Banker's: before granting a resource, simulate the allocation and check if a safe sequence of process completions exists. If yes, grant."},
    {id: 202, s: "OS", q: "FIFO page replacement suffers from which anomaly?", o: [
        "LRU Anomaly",
        "Optimal Anomaly",
        "Belady's Anomaly - more frames can cause more page faults",
        "Thrashing Anomaly"
      ], a: 2, e: "Belady's Anomaly: unique to FIFO - increasing the number of page frames sometimes INCREASES page faults. Counter-intuitive!"},
    {id: 203, s: "OS", q: "What is a semaphore?", o: [
        "A CPU scheduling mechanism",
        "A synchronization variable supporting atomic wait(P) and signal(V) operations to control access to shared resources",
        "A type of deadlock",
        "A memory management unit"
      ], a: 1, e: "Semaphore: integer variable. P(s): s--; block if s<0. V(s): s++; unblock a waiting process if s<=0. Used for mutual exclusion and synchronization."},
    {id: 204, s: "OS", q: "In Unix, what does exec() do?", o: [
        "Creates a new process",
        "Replaces the current process image with a new program, keeping the same PID",
        "Terminates the process",
        "Suspends the process"
      ], a: 1, e: "exec(): replaces the calling process's code, data, and stack with a new program. PID remains the same. Used after fork() to run a new program."},
    {id: 205, s: "OS", q: "Paging eliminates which type of memory fragmentation?", o: [
        "Internal fragmentation",
        "External fragmentation",
        "Both types",
        "Neither type"
      ], a: 1, e: "Paging: memory divided into fixed-size frames; any free frame can be assigned to any page -> no external fragmentation. Small internal fragmentation may occur in last page."},
    {id: 206, s: "OS", q: "What is an orphan process?", o: [
        "A process with no memory",
        "A child process whose parent has terminated before the child",
        "A process waiting for I/O",
        "A zombie process"
      ], a: 1, e: "Orphan: child process still running after parent exits. init process (PID 1) adopts orphans and eventually reaps them."},
    {id: 207, s: "OS", q: "Which of the following is an example of preemptive scheduling?", o: [
        "FCFS",
        "Non-preemptive Priority",
        "Round Robin",
        "Non-preemptive SJF"
      ], a: 2, e: "Round Robin is preemptive - the OS forcibly removes the CPU from a process after its time quantum expires."},
    {id: 208, s: "OS", q: "The CPU scheduler is responsible for:", o: [
        "Managing disk I/O",
        "Selecting which process from the ready queue gets the CPU next",
        "Allocating virtual memory",
        "Handling interrupts"
      ], a: 1, e: "Short-term scheduler (CPU scheduler): picks from the ready queue and dispatches to CPU. Runs very frequently."},
    {id: 209, s: "OS", q: "What is context switching?", o: [
        "Switching between kernel and user mode",
        "Saving the complete CPU state (registers, PC, stack pointer) of the currently running process and loading the state of the next process",
        "Switching between user accounts",
        "Changing the scheduling algorithm"
      ], a: 1, e: "Context switch: involves saving PCB of current process, loading PCB of next process. Pure overhead - no useful work done during the switch."},
    {id: 210, s: "OS", q: "LRU page replacement replaces:", o: [
        "The most recently used page",
        "The page not used for the longest time in the past",
        "The first page loaded",
        "The page that will not be used for the longest time in future"
      ], a: 1, e: "LRU (Least Recently Used): replaces the page whose most recent use was furthest in the past. Good approximation of OPT."},
    {id: 211, s: "CN", q: "What is the difference between TCP and UDP?", o: [
        "TCP is connectionless; UDP is connection-oriented",
        "TCP is connection-oriented, reliable, ordered, error-checked; UDP is connectionless, fast, no delivery guarantees",
        "Both are identical",
        "UDP is more reliable than TCP"
      ], a: 1, e: "TCP: 3-way handshake, guaranteed delivery, ordering, flow control. UDP: no handshake, fire-and-forget. Choose based on reliability vs speed."},
    {id: 212, s: "CN", q: "Which layer of the OSI model handles IP addressing and routing?", o: [
        "Data Link (Layer 2)",
        "Network (Layer 3)",
        "Transport (Layer 4)",
        "Physical (Layer 1)"
      ], a: 1, e: "Network layer (L3): IP addressing, routing via routers, fragmentation. Protocols: IP, ICMP, ARP (sometimes L2/L3)."},
    {id: 213, s: "CN", q: "What does DNS stand for and what does it do?", o: [
        "Data Network System - stores network data",
        "Domain Name System - translates domain names to IP addresses",
        "Dynamic Node Service - assigns IPs",
        "Distributed Name Server - stores web pages"
      ], a: 1, e: "DNS: the internet's phone book. Resolves human-readable names (google.com) to machine-readable IP addresses."},
    {id: 214, s: "CN", q: "Default port for HTTP vs HTTPS?", o: [
        "80 vs 443",
        "443 vs 80",
        "8080 vs 443",
        "80 vs 8080"
      ], a: 0, e: "HTTP=80, HTTPS=443. HTTPS is HTTP over TLS/SSL."},
    {id: 215, s: "CN", q: "What does ARP do?", o: [
        "Assigns IP addresses",
        "Resolves IP addresses to MAC addresses on a local network",
        "Translates domain names to IPs",
        "Routes packets between networks"
      ], a: 1, e: "ARP (Address Resolution Protocol): broadcasts \"Who has IP x.x.x.x?\" on the LAN. The owner replies with its MAC address."},
    {id: 216, s: "CN", q: "What is subnetting?", o: [
        "Connecting two ISPs",
        "Dividing a large network into smaller subnetworks to improve management and reduce broadcast domains",
        "Increasing IP address space",
        "Connecting IPv4 and IPv6"
      ], a: 1, e: "Subnetting uses a subnet mask to divide one network into multiple smaller networks (subnets), improving security, reducing congestion."},
    {id: 217, s: "CN", q: "How many usable host addresses are in a /26 subnet?", o: [
        "62",
        "64",
        "30",
        "126"
      ], a: 0, e: "/26 = 64 total IPs. Subtract network (x.x.x.0) and broadcast (x.x.x.63) -> 62 usable hosts."},
    {id: 218, s: "CN", q: "Which protocol assigns IP addresses automatically to hosts?", o: [
        "DNS",
        "ARP",
        "DHCP",
        "RARP"
      ], a: 2, e: "DHCP (Dynamic Host Configuration Protocol): client broadcasts request, DHCP server offers IP, subnet mask, gateway, DNS."},
    {id: 219, s: "CN", q: "What is a MAC address?", o: [
        "IP address for mobile devices",
        "A 48-bit hardware identifier burned into a NIC, used for Layer 2 (local network) communication",
        "A 128-bit IPv6 address",
        "A hostname"
      ], a: 1, e: "MAC = Media Access Control. 48-bit (6 bytes) written as XX:XX:XX:XX:XX:XX. Unique to each NIC. Used within same network segment."},
    {id: 220, s: "CN", q: "What is a three-way handshake?", c: `Client -> SYN -> Server
Server -> SYN-ACK -> Client
Client -> ACK -> Server`, o: [
        "UDP connection setup",
        "FTP file transfer initiation",
        "TCP connection establishment process",
        "DNS resolution process"
      ], a: 2, e: "TCP three-way handshake establishes a connection: SYN synchronizes sequence numbers, SYN-ACK acknowledges, ACK completes setup."},
    {id: 221, s: "CN", q: "What is NAT (Network Address Translation)?", o: [
        "Encrypts all traffic leaving a network",
        "Maps private IP addresses to a public IP address, allowing multiple devices to share one public IP",
        "Converts IPv4 to IPv6",
        "Provides DNS resolution"
      ], a: 1, e: "NAT: router modifies packet headers to translate private IPs (192.168.x.x) to a single public IP. Solves IPv4 exhaustion."},
    {id: 222, s: "CN", q: "Which is a private IP address range?", o: [
        "8.8.8.0/24",
        "172.16.0.0/12",
        "223.0.0.0/8",
        "100.0.0.0/8"
      ], a: 1, e: "RFC 1918 private ranges: 10.0.0.0/8, 172.16.0.0-172.31.255.255, 192.168.0.0/16. Not routable on public internet."},
    {id: 223, s: "CN", q: "What does TTL in an IP packet do?", o: [
        "Specifies encryption level",
        "Decrements by 1 at each router hop; when 0, packet is discarded (prevents routing loops)",
        "Sets packet priority",
        "Specifies maximum packet size"
      ], a: 1, e: "TTL prevents packets from circulating forever. traceroute uses TTL (sending packets with TTL=1,2,3...) to map the path to a destination."},
    {id: 224, s: "CN", q: "IPv4 vs IPv6 - what is the primary difference?", o: [
        "Speed of routing",
        "IPv4 is 32 bits (~4B addresses); IPv6 is 128 bits (~3.4x10^38 addresses), created to solve IPv4 exhaustion",
        "IPv6 is slower than IPv4",
        "IPv4 supports more features"
      ], a: 1, e: "IPv4 address space is exhausted. IPv6 provides a vastly larger address space plus built-in support for autoconfiguration and IPSec."},
    {id: 225, s: "CN", q: "Which protocol is used to send emails?", o: [
        "HTTP",
        "FTP",
        "SMTP",
        "IMAP"
      ], a: 2, e: "SMTP (Simple Mail Transfer Protocol, port 25/587): sends/relays emails. IMAP/POP3: retrieve emails from server to client."},
    {id: 226, s: "APT", q: "If a train travels 300 km in 5 hours, what is its average speed in km/h?", o: [
        "50",
        "60",
        "55",
        "65"
      ], a: 1, e: "Speed = Distance/Time = 300/5 = 60 km/h."},
    {id: 227, s: "APT", q: "What is 15% of 240?", o: [
        "32",
        "36",
        "38",
        "34"
      ], a: 1, e: "15% of 240 = 0.15 x 240 = 36."},
    {id: 228, s: "APT", q: "If 6 workers can complete a task in 10 days, how many days will 4 workers take?", o: [
        "12",
        "15",
        "14",
        "18"
      ], a: 1, e: "Work = 6x10=60 man-days. 4 workers: 60/4=15 days."},
    {id: 229, s: "APT", q: "A number when divided by 5 gives remainder 3. Which could be the number?", o: [
        "19",
        "20",
        "23",
        "25"
      ], a: 2, e: "A number of the form 5k+3 leaves remainder 3 on division by 5. 23 = 5x4 + 3, so it fits."},
    {id: 230, s: "APT", q: "What comes next in the series: 2, 6, 12, 20, 30, ?", o: [
        "40",
        "42",
        "44",
        "38"
      ], a: 1, e: "Differences: 4,6,8,10,12. Next = 30+12=42."},
    {id: 231, s: "APT", q: "If A is the mother of B and B is the father of C, what is A to C?", o: [
        "Mother",
        "Grandmother",
        "Aunt",
        "Sister"
      ], a: 1, e: "A is B's mother. B is C's father. Therefore A is C's paternal grandmother."},
    {id: 232, s: "APT", q: "A shopkeeper buys an item for Rs. 200 and sells at 25% profit. What is the selling price?", o: [
        "Rs. 220",
        "Rs. 225",
        "Rs. 240",
        "Rs. 250"
      ], a: 3, e: "SP = CP x (1 + profit%) = 200 x 1.25 = Rs. 250."},
    {id: 233, s: "APT", q: "Two numbers are in the ratio 3:5. If their sum is 64, find the larger number.", o: [
        "24",
        "32",
        "40",
        "36"
      ], a: 2, e: "3x+5x=64 -> 8x=64 -> x=8. Larger=5x8=40."},
    {id: 234, s: "APT", q: "What is the next term: 1, 1, 2, 3, 5, 8, 13, ?", o: [
        "18",
        "19",
        "20",
        "21"
      ], a: 3, e: "Fibonacci: each term = sum of previous two. 8+13=21."},
    {id: 235, s: "APT", q: "If MANGO is coded as 13-1-14-7-15, what is the code for APPLE?", o: [
        "1-16-16-12-5",
        "1-15-16-12-5",
        "2-16-16-12-5",
        "1-16-16-11-5"
      ], a: 0, e: "Simple letter-to-number (A=1,B=2...): A=1,P=16,P=16,L=12,E=5 -> 1-16-16-12-5."},
    {id: 236, s: "APT", q: "Simple interest on Rs. 1000 at 10% per annum for 3 years is:", o: [
        "Rs. 100",
        "Rs. 200",
        "Rs. 300",
        "Rs. 310"
      ], a: 2, e: "SI = P x R x T / 100 = 1000x10x3/100 = Rs. 300."},
    {id: 237, s: "APT", q: "Which is the odd one out: 2, 3, 5, 7, 9, 11?", o: [
        "2",
        "3",
        "9",
        "11"
      ], a: 2, e: "9 = 3^2 is not prime. All others (2,3,5,7,11) are prime numbers."},
    {id: 238, s: "APT", q: "In a class of 30, 18 play cricket and 15 play football. 10 play both. How many play neither?", o: [
        "5",
        "7",
        "10",
        "8"
      ], a: 1, e: "|C union F| = 18+15-10=23. Neither = 30-23=7."},
    {id: 239, s: "APT", q: "A tap fills a tank in 4 hours. Another drains it in 8 hours. If both open simultaneously, in how many hours is the tank full?", o: [
        "4",
        "6",
        "8",
        "10"
      ], a: 2, e: "Net rate = 1/4-1/8 = 1/8 per hour. Time to fill = 8 hours."},
    {id: 240, s: "APT", q: "If P>Q, Q>R, then:", o: [
        "P>R definitely",
        "P<R definitely",
        "P=R",
        "Cannot determine"
      ], a: 0, e: "Transitivity: P>Q and Q>R -> P>R."},
    {id: 241, s: "APT", q: "The compound interest on Rs. 1000 at 10% for 2 years (compounded annually) is:", o: [
        "Rs. 200",
        "Rs. 210",
        "Rs. 100",
        "Rs. 220"
      ], a: 1, e: "A = 1000x(1.1)^2 = 1210. CI = 1210-1000 = Rs. 210."},
    {id: 242, s: "APT", q: "A can complete work in 10 days. B can complete in 15 days. Working together, in how many days?", o: [
        "5",
        "6",
        "8",
        "12"
      ], a: 1, e: "A+B rate = 1/10+1/15 = 3/30+2/30 = 5/30 = 1/6. Days = 6."},
    {id: 243, s: "APT", q: "What is the mirror image of the time 3:15 on an analog clock?", o: [
        "8:45",
        "9:45",
        "8:15",
        "9:15"
      ], a: 0, e: "For mirror image problems on an analog clock, subtract from 11:60. So 11:60 - 3:15 = 8:45."},
    {id: 244, s: "APT", q: "If in a certain code, FISH is written as GRUJ, how is BIRD written?", o: [
        "CJSE",
        "CJSF",
        "DJSE",
        "CISE"
      ], a: 0, e: "Each letter shifted by +1: B->C, I->J, R->S, D->E. BIRD->CJSE."},
    {id: 245, s: "APT", q: "The average of 5 numbers is 10. If one number is removed, the average becomes 9. What is the removed number?", o: [
        "12",
        "13",
        "14",
        "15"
      ], a: 2, e: "Sum of 5 = 50. Sum of 4 = 36. Removed = 50-36=14."},
    {id: 246, s: "APT", q: "What percentage is 75 of 300?", o: [
        "20%",
        "25%",
        "30%",
        "15%"
      ], a: 1, e: "75/300 x 100 = 25%."},
    {id: 247, s: "APT", q: "Next in the series: Z, X, V, T, R, ?", o: [
        "P",
        "Q",
        "O",
        "S"
      ], a: 0, e: "Skip one letter each time (Z,X,V,T,R,P) - every alternate letter in reverse. Next = P."},
    {id: 248, s: "APT", q: "If \"COMPUTER\" is coded as \"RFUVQNPC\", what is the pattern?", o: [
        "+1 shift",
        "-1 shift then reverse",
        "Reverse the word",
        "Reverse each letter's position in alphabet"
      ], a: 2, e: "The example is not perfectly consistent under a strict coding rule. Among the given options, the best fit is \"Reverse the word\", which is the intended takeaway for this type of OA question."},
    {id: 249, s: "APT", q: "A box contains 3 red, 4 blue, 5 green balls. What is the probability of picking a blue ball?", o: [
        "5/12",
        "1/4",
        "2/3",
        "1/3"
      ], a: 3, e: "Total balls = 3+4+5 = 12. Blue balls = 4. So P(blue) = 4/12 = 1/3."},
    {id: 250, s: "APT", q: "How many prime numbers are there between 1 and 30?", o: [
        "8",
        "9",
        "10",
        "11"
      ], a: 2, e: "Primes: 2,3,5,7,11,13,17,19,23,29 = 10 primes between 1 and 30."}
  ]};
