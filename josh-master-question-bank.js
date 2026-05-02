function dedupeMasterQuestions(rawQuestions){
  const seen = new Set();
  const cleaned = [];

  for(const raw of rawQuestions){
    const subject = raw.s;
    const question = raw.q;
    const code = raw.c || '';
    const options = raw.o || [];
    const answer = raw.a;

    if(!subject || !question || !Array.isArray(options) || options.length < 2) continue;
    if(typeof answer !== 'number' || answer < 0 || answer >= options.length) continue;

    const key = [
      subject,
      question.trim(),
      code.trim(),
      options.map(option => String(option).trim()).join('||')
    ].join('###');

    if(seen.has(key)) continue;
    seen.add(key);

    cleaned.push({
      ...raw,
      s: subject,
      q: question,
      c: code || undefined,
      o: options,
      a: answer
    });
  }

  return cleaned.map((q, index) => ({...q, id: index + 1}));
}

const MASTER_RAW_PRIMARY = [
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=2,b=3,c=4;
  printf("%d", a+b*c);
}`,o:['20','14','24','Compile Error'],a:1,e:'Operator precedence: * before +. b*c=12, then a+12=14.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=10;
  printf("%d %d %d", x, x<<1, x>>1);
}`,o:['10 20 5','10 10 10','10 5 20','Compile Error'],a:0,e:'x=10. x<<1=20 (left shift = *2). x>>1=5 (right shift = /2).'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=3;
  int c = a+++b;
  printf("%d %d %d",a,b,c);
}`,o:['6 3 8','5 3 8','6 4 8','6 3 9'],a:0,e:'a+++ parsed as (a++)+b. c=5+3=8. After post-increment, a=6. b unchanged=3.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
#define SQ(x) x*x
int main(){
  printf("%d", SQ(3+2));
}`,o:['25','11','13','Compile Error'],a:1,e:'Macro expands: SQ(3+2)=3+2*3+2=3+6+2=11. Without parentheses, macro substitution causes this trap.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=0;
  for(; i<3; i++)
    printf("%d ",i);
}`,o:['0 1 2','1 2 3','0 1 2 3','Infinite'],a:0,e:'Loop from 0 to 2. Output: 0 1 2.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int f(int n){
  if(n==0) return 0;
  return n + f(n-1);
}
int main(){
  printf("%d",f(5));
}`,o:['15','10','5','0'],a:0,e:'f(5)=5+4+3+2+1+0=15.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=10;
  printf("%d", a==5 ? b==10 ? 100 : 200 : 300);
}`,o:['100','200','300','Compile Error'],a:0,e:'a==5 is true, so evaluate b==10?100:200. Since b==10 is also true, the result is 100.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char arr[] = "Hello";
  printf("%d", sizeof(arr));
  printf(" %d", strlen(arr));
}`,o:['6 5','5 5','6 6','5 6'],a:0,e:'sizeof("Hello") includes the null terminator, so it is 6. strlen counts only visible characters, so it is 5.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
void inc(int x){ x++; }
int main(){
  int a=5;
  inc(a);
  printf("%d",a);
}`,o:['5','6','Compile Error','Garbage'],a:0,e:'C uses pass by value, so inc() changes only a local copy. a remains 5.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=7,b=7;
  printf("%d", a==b);
  printf(" %d", a!=b);
  printf(" %d", a>=b);
}`,o:['1 0 1','0 1 0','1 1 1','0 0 1'],a:0,e:'7==7 is 1, 7!=7 is 0, and 7>=7 is 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=10;
  if(x>5)
  if(x>8)
    printf("A");
  else
    printf("B");
}`,o:['A','B','AB','Nothing'],a:0,e:'The else binds to the nearest if. Since both conditions are true, it prints A.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int arr[5]={1,2,3};
  printf("%d %d",arr[3],arr[4]);
}`,o:['0 0','Garbage','3 0','Compile Error'],a:0,e:'Partial initialization fills the remaining array elements with 0.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5;
  printf("%d", a>3 ? "big" : "small");
}`,o:['big','small','Compile Error','Address'],a:3,e:'The ternary returns a string pointer, but `%d` expects an int. This is undefined behavior; in MCQ form the closest intended option is that a pointer address/garbage is printed.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  printf("%d %d", 10/3, 10%3);
}`,o:['3 1','3 0','4 1','3 3'],a:0,e:'10/3 is integer division, so it gives 3. 10%3 gives remainder 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=3;
  switch(i%2){
    case 0: printf("even"); break;
    case 1: printf("odd"); break;
    default: printf("unknown");
  }
}`,o:['even','odd','unknown','Compile Error'],a:1,e:'3%2 is 1, so case 1 runs and prints odd.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=0;
  printf("%d", x++ == 0 && ++x == 2);
}`,o:['0','1','Undefined','Compile Error'],a:1,e:'The left side of && is evaluated first. x++ yields 0 then x becomes 1; ++x makes it 2. Both comparisons are true, so it prints 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int global = 10;
void modify(){global = 20;}
int main(){
  printf("%d ",global);
  modify();
  printf("%d",global);
}`,o:['10 10','10 20','20 20','Compile Error'],a:1,e:'The global variable starts at 10 and is changed to 20 by modify().' },
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=256;
  unsigned char b = a;
  printf("%d",b);
}`,o:['256','0','255','1'],a:1,e:'Only the lowest 8 bits are stored in an unsigned char, so 256 becomes 0.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=5;
  int j=i++>5 ? i : --i;
  printf("%d %d",i,j);
}`,o:['5 4','6 4','5 5','4 4'],a:2,e:'i++ yields 5 so the condition is false. i becomes 6, then --i makes it 5 and assigns 5 to j. Output: 5 5.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
void f(int a, int b){
  printf("%d %d",a,b);
}
int main(){
  int x=5;
  f(x,++x);
}`,o:['5 6','6 6','Undefined','5 5'],a:2,e:'The order of evaluation of function arguments is unspecified in C, so this is undefined behavior.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  for(int i=0;i<5;i++){
    if(i==3) break;
  }
  printf("%d",i);
}`,o:['3','4','5','Compile Error'],a:3,e:'In C99 and later, the loop variable declared in the for statement is scoped to that loop only, so printing i outside is a compile error.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=10,b=20;
  printf("%d", a>b ? a++ : b++);
  printf(" %d %d",a,b);
}`,o:['20 10 21','10 11 20','10 10 21','20 11 20'],a:0,e:'a>b is false, so b++ is used. It prints 20, then b becomes 21. a stays 10.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  printf("%d", (int)3.9);
  printf(" %d", (int)-3.9);
}`,o:['3 -3','4 -4','3 -4','4 -3'],a:0,e:'Casting to int truncates toward zero, so the result is 3 and -3.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=1;
  while(a<=4){
    printf("%d ",a);
    a<<=1;
  }
}`,o:['1 2 4','1 2 3 4','1 2 4 8','2 4 8'],a:0,e:'Each left shift by 1 doubles the value, so it prints 1 2 4.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char c='z'-'a';
  printf("%d",c);
}`,o:['25','26','0','1'],a:0,e:'ASCII z is 122 and a is 97, so the difference is 25.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=10,b=3;
  float c=a/b;
  printf("%.2f",c);
}`,o:['3.33','3.00','3.10','Compile Error'],a:1,e:'a/b is integer division, so it evaluates to 3 before being stored in float c.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=1;
  do {
    i*=2;
    if(i==8) break;
    printf("%d ",i);
  } while(i<16);
}`,o:['2 4','2 4 8','4 8','2 4 16'],a:0,e:'It prints 2, then 4, and breaks when i reaches 8.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  printf("%s", "Hello" + 2);
}`,o:['Hello','He','llo','Compile Error'],a:2,e:'Pointer arithmetic moves to the first l, so the printed string is llo.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=5;
  printf("%d", x&1);
  x=6;
  printf(" %d", x&1);
}`,o:['1 0','0 1','1 1','0 0'],a:0,e:'Odd numbers have the lowest bit set, even numbers do not.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=12,b=10;
  printf("%d %d", a&b, a|b);
}`,o:['8 14','10 12','8 12','10 14'],a:0,e:'12 is 1100 and 10 is 1010. AND gives 1000 (8), OR gives 1110 (14).'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int n=0;
  printf("%d", n ? printf("True") : printf("False"));
}`,o:['False5','False','True','FalseTrue'],a:0,e:'The false branch prints False and returns 5, then the outer printf prints that 5.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=2,b=3,c=1;
  if(a < b < c)
    printf("yes");
  else
    printf("no");
}`,o:['yes','no','Compile Error','Undefined'],a:1,e:'a<b evaluates to 1, then 1<c becomes 1<1, which is false. So it prints no.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int arr[]={1,2,3,4,5};
  int *p=arr+4;
  while(p>=arr){
    printf("%d ",*p);
    p--;
  }
}`,o:['5 4 3 2 1','1 2 3 4 5','5 4 3 2','1 2 3 4'],a:0,e:'The pointer starts at the last element and moves backward to the first.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5;
  int b=a++ + a++;
  printf("%d",b);
}`,o:['10','11','Undefined','12'],a:2,e:'The same variable is modified multiple times without a sequence point, so this is undefined behavior.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i;
  for(i=0;i<3;i++){
    printf("%d ",i);
    i++;
  }
}`,o:['0 1 2','0 2','0 2 4','0 1 2 3'],a:1,e:'The body increments i once and the loop update increments it again, so it prints 0 then 2.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char a='A';
  printf("%c %c %c", a, a+1, a+2);
}`,o:['A B C','A 66 67','65 66 67','Compile Error'],a:0,e:'Character values 65, 66, and 67 are printed with %c, so they appear as A B C.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=5,y=0;
  y = x>3 && printf("Hi");
  printf(" %d",y);
}`,o:['Hi 1','Hi 0',' 0','Compile Error'],a:0,e:'printf("Hi") returns 2, which is treated as true, so y becomes 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=0xA, b=0xB;
  printf("%d %d %d", a, b, a+b);
}`,o:['10 11 21','A B 21','10 11 11','Compile Error'],a:0,e:'Hex A is 10 and B is 11 in decimal, so the sum is 21.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=10,c;
  c=(a>b)+(b>a)+(a==a);
  printf("%d",c);
}`,o:['1','2','3','0'],a:1,e:'The three comparisons evaluate to 0, 1, and 1, which sum to 2.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=10;
  while(i--){
    if(i==5) break;
    printf("%d ",i);
  }
}`,o:['9 8 7 6','9 8 7 6 5','10 9 8 7 6','9 8 7 6 5 4'],a:0,e:'The loop prints 9, 8, 7, 6 and then stops when i becomes 5.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int add(int a,int b){ return a+b; }
int mul(int a,int b){ return a*b; }
int main(){
  int (*fp)(int,int);
  fp=add;
  printf("%d ",fp(3,4));
  fp=mul;
  printf("%d",fp(3,4));
}`,o:['7 12','12 7','7 7','12 12'],a:0,e:'The function pointer first calls add and then mul.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=10,b=3;
  printf("%d %d", a%b, (a+b)%b);
}`,o:['1 1','1 0','3 1','0 1'],a:0,e:'10%3 is 1 and (10+3)%3 is also 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5;
  switch(a){
    case 5:
    case 6:  printf("5 or 6 ");
    case 7:  printf("7 ");
             break;
    default: printf("other");
  }
}`,o:['5 or 6','5 or 6 7','7','5 or 6 7 other'],a:1,e:'Execution falls through from case 5 to case 6 and then to case 7, so it prints both pieces before the break.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=5;
  {
    int x=x+1;
    printf("%d",x);
  }
}`,o:['6','Garbage','Compile Error','0'],a:1,e:'The inner x is used in its own initializer and has an indeterminate value, so the result is undefined/garbage.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  printf("%d", 2<<3);
}`,o:['16','6','8','Compile Error'],a:0,e:'2 shifted left by 3 is 16.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=15;
  printf("%d",a>>2);
}`,o:['3','5','60','Compile Error'],a:0,e:'15 right-shifted by 2 becomes 3.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int n=5;
  int result = n*(n+1)/2;
  printf("%d",result);
}`,o:['15','10','12','20'],a:0,e:'This is the sum formula for 1 through n, so 5*6/2 = 15.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a[3]={10,20,30};
  int *p=a;
  printf("%d", *(p+1) + *(p+2));
}`,o:['50','30','60','Compile Error'],a:0,e:'The second and third elements are 20 and 30, so the sum is 50.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=2;
  printf("%f", (float)a/b);
}`,o:['2.500000','2.000000','2','Compile Error'],a:0,e:'Casting a to float makes the division floating-point, so the result is 2.5.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
void f(int *arr, int n){
  for(int i=0;i<n;i++)
    arr[i]*=2;
}
int main(){
  int a[]={1,2,3};
  f(a,3);
  printf("%d %d %d",a[0],a[1],a[2]);
}`,o:['1 2 3','2 4 6','2 2 2','Compile Error'],a:1,e:'The function receives a pointer to the original array, so the elements are doubled in place.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=1;
  printf("%d %d %d", i, i*2, i*3);
  i=10;
  printf("\n%d %d %d", i, i*2, i*3);
}`,o:['1 2 3\n10 20 30','1 2 3 10 20 30','10 20 30\n1 2 3','Compile Error'],a:0,e:'The first line uses i=1 and the second line uses i=10.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int cnt=0;
void f(int n){
  cnt++;
  if(n>0) f(n-1);
}
int main(){
  f(5);
  printf("%d",cnt);
}`,o:['5','6','4','Infinite'],a:1,e:'The function is called for 5,4,3,2,1,0, so cnt becomes 6.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char s[]="JoshTech";
  printf("%c %c", s[0], *(s+4));
}`,o:['J T','J o','J e','o T'],a:0,e:'s[0] is J and s[4] is T.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=5;
  printf("%d %d", a++ == b++, a == b);
}`,o:['1 1','1 0','0 1','0 0'],a:0,e:'Both post-increments compare as 5, then both become 6, so the second comparison is also true.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
#define DOUBLE(x) ((x)+(x))
int main(){
  int a=3;
  printf("%d", DOUBLE(a++));
}`,o:['6','7','8','Undefined'],a:3,e:'The macro expands to `(a++) + (a++)`, which modifies a twice without sequencing. This is undefined behavior.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=0;
  a |= 4;
  a |= 2;
  printf("%d",a);
}`,o:['6','4','2','8'],a:0,e:'0|4 gives 4 and 4|2 gives 6.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=7;
  a &= ~2;
  printf("%d",a);
}`,o:['5','7','3','Compile Error'],a:0,e:'Clearing bit 1 in binary 111 leaves 101, which is 5.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=100;
  int *p=&x;
  printf("%d %d %d", x, *p, *(&x));
}`,o:['100 100 100','100 Address 100','Address Address 100','Compile Error'],a:0,e:'All three expressions refer to the same integer value 100.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  float a=0.1+0.2;
  printf("%d", a==0.3);
}`,o:['1','0','Compile Error','Undefined'],a:1,e:'Because of floating-point representation, 0.1+0.2 is not exactly equal to 0.3.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=10;
  int *p=NULL;
  if(p == NULL)
    printf("null pointer");
  else
    printf("%d",*p);
}`,o:['null pointer','0','Segfault','Compile Error'],a:0,e:'The null check succeeds, so the pointer is never dereferenced.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int arr[3][2]={{1,2},{3,4},{5,6}};
  printf("%d", arr[1][1] + arr[2][0]);
}`,o:['9','7','8','Compile Error'],a:0,e:'arr[1][1] is 4 and arr[2][0] is 5, so the total is 9.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=10;
  int b=a++ + ++a;
  printf("%d",b);
}`,o:['21','22','Undefined','20'],a:2,e:'The variable a is modified more than once without sequencing, so the expression is undefined.'},
{s:'COUT',d:'e',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=0;
  printf("%d ", i);
  printf("%d ", ++i);
  printf("%d ", i++);
  printf("%d", i);
}`,o:['0 1 1 2','0 1 0 1','1 1 1 2','0 0 1 2'],a:0,e:'The prints occur in order: 0, then 1, then 1 with post-increment, then final i is 2.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char str[10];
  strcpy(str,"Hello");
  str[0]='J';
  printf("%s",str);
}`,o:['Hello','Jello','J','JHello'],a:1,e:'The string is stored in a writable array, so changing the first character gives Jello.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=1,b=2,c=3;
  a=b=c=10;
  printf("%d %d %d",a,b,c);
}`,o:['10 10 10','1 2 3','10 2 1','3 3 3'],a:0,e:'Assignment is right-associative, so c becomes 10, then b, then a.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int n=2357;
  int d=0;
  while(n){d+=n%10;n/=10;}
  printf("%d",d);
}`,o:['17','23','20','19'],a:0,e:'The digit sum is 2+3+5+7 = 17.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int x=5;
  printf("%d", ~x);
}`,o:['-6','-5','4','6'],a:0,e:'For signed integers, bitwise NOT of 5 results in -6.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=3;
  printf("%d", a^b);
}`,o:['6','8','7','2'],a:0,e:'101 XOR 011 is 110, which is 6.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int i=1,s=0;
  while(i<=100){
    if(i%2==0) s+=i;
    i++;
  }
  printf("%d",s);
}`,o:['2550','5050','2600','2450'],a:0,e:'The sum of all even numbers from 2 to 100 is 2550.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  printf("%d %d",sizeof(int)*2, sizeof(char)*8);
}`,o:['8 8','4 8','8 4','16 8'],a:0,e:'Assuming 4-byte int and 1-byte char, the results are 8 and 8.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=5,b=10;
  int max=(a>b)?a:b;
  int min=(a<b)?a:b;
  printf("%d %d",max,min);
}`,o:['10 5','5 10','10 10','5 5'],a:0,e:'The larger value is 10 and the smaller value is 5.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=8;
  while(a>0){
    printf("%d ",a%2);
    a/=2;
  }
}`,o:['0 0 0 1','1 0 0 0','0 0 0 1 0','0 1 0 0'],a:0,e:'It prints the binary digits of 8 in reverse order: 0 0 0 1.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int a=3,b=4;
  printf("%d", a*a + b*b);
  printf(" %d", a*a + 2*a*b + b*b);
}`,o:['25 49','25 25','49 49','7 49'],a:0,e:'3^2+4^2 = 25 and (3+4)^2 = 49.'},
{s:'COUT',d:'m',q:'What is the output?',c:`#include<stdio.h>
int main(){
  char s[]="Hello World";
  int vowels=0;
  for(int i=0;s[i];i++)
    if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
      vowels++;
  printf("%d",vowels);
}`,o:['3','4','2','5'],a:0,e:'The lowercase vowels present are e, o, and o, so the count is 3.'},
{s:'COUT',d:'h',q:'What is the output?',c:`#include<stdio.h>
int main(){
  int n=153;
  int temp=n,sum=0,d;
  while(temp){
    d=temp%10;
    sum+=d*d*d;
    temp/=10;
  }
  printf("%s", n==sum?"Armstrong":"Not");
}`,o:['Armstrong','Not','0','Compile Error'],a:0,e:'153 equals 1^3 + 5^3 + 3^3, so it is an Armstrong number.'},

{s:'PTR',d:'e',q:'What does the following code output?',c:`int a=42,*p=&a;
printf("%d",*p+1);`,o:['43','42','41','Compile Error'],a:0,e:'*p gives 42, so the printed value is 43.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int a=5,b=10;
int *p=&a,*q=&b;
*p=*q;
printf("%d %d",a,b);`,o:['10 10','5 10','10 5','5 5'],a:0,e:'The value of b is copied into a through the pointers, so both become 10.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int arr[]={10,20,30,40};
int *p=&arr[1];
printf("%d %d",*(p-1),*(p+2));`,o:['10 40','20 40','10 30','Compile Error'],a:0,e:'p-1 points to arr[0] and p+2 points to arr[3], so the output is 10 40.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int a=5,b=10;
int *p=&a;
p=&b;
(*p)++;
printf("%d %d",a,b);`,o:['5 11','6 10','5 10','6 11'],a:0,e:'After p is redirected to b, incrementing *p increases b to 11.'},
{s:'PTR',d:'h',q:'What is the output?',c:`char *p="Josh";
char q[]="Josh";
q[0]='B';
printf("%s",q);`,o:['Josh','Bosh','Segfault','Compile Error'],a:1,e:'q is a writable character array, so changing q[0] gives Bosh.'},
{s:'PTR',d:'m',q:'What is the difference between "int *const p" and "const int *p"?',o:['No difference','int *const p: pointer is const; const int *p: pointed data is const','const int *p: pointer is const; int *const p: data is const','Both mean pointer and data are const'],a:1,e:'One makes the pointer fixed, the other makes the pointed-to integer read-only through that pointer.'},
{s:'PTR',d:'h',q:'What is the output?',c:`void swap(int **a, int **b){
  int *t=*a; *a=*b; *b=t;
}
int main(){
  int x=1,y=2;
  int *p=&x,*q=&y;
  swap(&p,&q);
  printf("%d %d",*p,*q);
}`,o:['2 1','1 2','1 1','2 2'],a:0,e:'The pointers are swapped, so p points to y and q points to x.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int arr[]={5,10,15,20,25};
int *p=arr;
printf("%d",*(p+3));
printf(" %d",p[2]);`,o:['20 15','15 20','20 20','15 15'],a:0,e:'*(p+3) is 20 and p[2] is 15.'},
{s:'PTR',d:'m',q:'What does this function do?',c:`int mystery(int *arr, int n){
  int s=0;
  for(int i=0;i<n;i++) s+=arr[i];
  return s;
}`,o:['Finds max element','Reverses array','Computes sum of array elements','Sorts array'],a:2,e:'It adds each array element into s and returns the total.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a=10;
  int *p=&a;
  int **pp=&p;
  printf("%d %d %d",a,*p,**pp);
}`,o:['10 10 10','10 Address Address','Address 10 10','Compile Error'],a:0,e:'The variable, single dereference, and double dereference all yield the same integer 10.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int arr[5]={0};
  for(int i=0;i<5;i++) *(arr+i)=i*i;
  for(int i=0;i<5;i++) printf("%d ",arr[i]);
}`,o:['0 1 4 9 16','0 0 0 0 0','0 1 2 3 4','1 4 9 16 25'],a:0,e:'The loop stores the squares of 0 through 4 in the array.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a=10;
  int *p=&a;
  printf("%d %d",p,*p);
}`,o:['Address 10','10 10','10 Address','Compile Error'],a:0,e:'The first value represents the pointer address conceptually, and the second is the pointed integer 10.'},
{s:'PTR',d:'m',q:'A pointer to a function is declared as:',o:['void f*();','void (*f)();','*void f();','void f()[]'],a:1,e:'The parentheses are necessary so the declaration means “pointer to function,” not “function returning pointer.”'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int arr[]={1,3,5,7,9};
  int *p=arr;
  int *q=arr+4;
  printf("%d",q-p);
}`,o:['4','8','16','5'],a:0,e:'Pointer subtraction on the same array gives the element distance, which is 4.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a=10;
  const int *p=&a;
  int *q=(int*)p;
  *q=20;
  printf("%d",a);
}`,o:['10','20','Compile Error','Undefined'],a:1,e:'Because the original object a is not const, writing through the cast pointer changes a to 20.'},
{s:'PTR',d:'m',q:'What does malloc() return if allocation fails?',o:['0','-1','NULL','Garbage pointer'],a:2,e:'malloc returns NULL on allocation failure.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int *p=(int*)malloc(sizeof(int));
  *p=42;
  printf("%d",*p);
  free(p);
  printf(" %d",*p);
}`,o:['42 42','42 0','42 Garbage/Crash','Compile Error'],a:2,e:'Reading through a freed pointer is undefined behavior and often prints garbage or crashes.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int arr[][3]={{1,2,3},{4,5,6}};
  int *p=(int*)arr;
  printf("%d %d",p[2],p[4]);
}`,o:['3 5','2 4','3 6','4 5'],a:0,e:'The 2D array is contiguous in memory, so p indexes the flattened sequence 1 2 3 4 5 6.'},
{s:'PTR',d:'m',q:'What is a NULL pointer dereference?',o:['Accessing memory at address 0 (or NULL), which is undefined behavior and often segfaults','A pointer pointing to a valid location','A pointer declared without initialization','Assigning NULL to a pointer variable'],a:0,e:'Dereferencing a NULL pointer is invalid and commonly causes a crash.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a=10,b=20,c=30;
  int *arr[3]={&a,&b,&c};
  for(int i=0;i<3;i++)
    printf("%d ",*arr[i]);
}`,o:['10 20 30','a b c','Address Address Address','Compile Error'],a:0,e:'Each element of arr is a pointer to an int, so dereferencing prints 10, 20, and 30.'},
{s:'PTR',d:'m',q:'In C, when you pass an array to a function, what is actually passed?',o:['A copy of the entire array','A pointer to the first element','A reference to the array','The size of the array'],a:1,e:'The array name decays to a pointer to its first element.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int n=5;
  int *p=(int*)calloc(n,sizeof(int));
  printf("%d %d %d",p[0],p[2],p[4]);
  free(p);
}`,o:['0 0 0','Garbage Garbage Garbage','1 1 1','Compile Error'],a:0,e:'calloc initializes all allocated bytes to zero.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a=10;
  void *p=&a;
  printf("%d", *(int*)p);
}`,o:['10','Compile Error','Address','Garbage'],a:0,e:'After casting the void pointer to int*, dereferencing prints 10.'},
{s:'PTR',d:'m',q:'What is the result of "ptr++" where ptr is a double*?',o:['Advances ptr by 1 byte','Advances ptr by 4 bytes','Advances ptr by 8 bytes','Advances ptr by sizeof(ptr) bytes'],a:2,e:'Pointer arithmetic advances by the size of the pointed type, so a double* moves by 8 bytes on common systems.'},
{s:'PTR',d:'h',q:'What is the output?',c:`void modify(int *p, int n){
  for(int i=0;i<n;i++)
    *(p+i)+=10;
}
int main(){
  int a[]={1,2,3,4,5};
  modify(a,5);
  printf("%d %d",a[0],a[4]);
}`,o:['11 15','1 5','10 50','Compile Error'],a:0,e:'The function adds 10 to every element, so the first and last become 11 and 15.'},
{s:'PTR',d:'m',q:'What is a wild pointer?',o:['A pointer initialized to NULL','An uninitialized pointer containing a garbage address','A pointer to a const variable','A pointer declared inside a function'],a:1,e:'A wild pointer has not been initialized and is dangerous to dereference.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int x=10,y=20;
  int *p=&x,*q=&y;
  printf("%d", *p < *q ? *p : *q);
}`,o:['10','20','0','Compile Error'],a:0,e:'Since 10 is less than 20, the ternary returns *p, which is 10.'},
{s:'PTR',d:'m',q:'What does "realloc(ptr, newSize)" do?',o:['Frees ptr and allocates fresh memory at a new location','Resizes an existing heap block and may move it, returning the new pointer','Only works when newSize is larger','Always zeroes the memory'],a:1,e:'realloc can grow or shrink a heap block and may return a different address.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int a[]={10,20,30};
  int *p=a+1;
  printf("%d %d",p[-1],p[1]);
}`,o:['10 30','20 20','10 20','Compile Error'],a:0,e:'p points to a[1], so p[-1] is a[0] and p[1] is a[2].'},
{s:'PTR',d:'m',q:'Which of the following correctly declares a pointer to an array of 5 ints?',o:['int *p[5];','int (*p)[5];','int p[5]*;','int p*[5];'],a:1,e:'`int (*p)[5]` means p is a pointer to an array of 5 ints.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  char *s="JoshTech";
  printf("%d",strlen(s));
  printf(" %c",*(s+strlen(s)-1));
}`,o:['8 h','8 c','7 h','Compile Error'],a:0,e:'The string length is 8 and the last character is h.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int a=5;
  int *p=&a;
  printf("%d",sizeof(p));
  printf(" %d",sizeof(*p));
}`,o:['8 4','4 4','4 8','8 8'],a:0,e:'On a 64-bit system, a pointer is typically 8 bytes and an int is 4 bytes.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int a=15;
  int *p=&a;
  *p *= 2;
  printf("%d",a);
}`,o:['15','30','2','Compile Error'],a:1,e:'Multiplying through the pointer changes a itself to 30.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int arr[4]={1,2,3,4};
  int *p=arr;
  *(p+2)=*(p+2)*2;
  for(int i=0;i<4;i++) printf("%d ",arr[i]);
}`,o:['1 2 6 4','1 2 3 4','2 4 6 8','1 2 4 4'],a:0,e:'Only arr[2] is doubled, so the array becomes 1 2 6 4.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int a=5,b=10;
  int *p=&a;
  p=&b;
  *p+=5;
  printf("%d %d",a,b);
}`,o:['5 15','10 15','5 10','10 10'],a:0,e:'After pointing to b, *p += 5 changes b to 15 while a stays 5.'},
{s:'PTR',d:'m',q:'What keyword is used to prevent a pointer from being incremented or reassigned?',o:['static','volatile','const (int * const p)','register'],a:2,e:'Making the pointer itself const prevents reassignment.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int i=0;
  int *p=&i;
  while(*p<5){
    (*p)++;
    printf("%d ",i);
  }
}`,o:['1 2 3 4 5','0 1 2 3 4','1 2 3 4','0 1 2 3'],a:0,e:'The pointer refers to i, so incrementing *p increments i and prints 1 through 5.'},
{s:'PTR',d:'m',q:'What does "*(arr+i)" mean when arr is an int array?',o:['Address of arr[i]','Value of arr[i]','Address plus i bytes','Compile Error'],a:1,e:'arr+i points to arr[i], and dereferencing it yields the value arr[i].'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int arr[]={2,4,6,8,10};
  int *p=arr;
  for(int i=0;i<5;i+=2)
    printf("%d ",*(p+i));
}`,o:['2 6 10','2 4 6','4 8','2 6 8'],a:0,e:'The loop prints elements at indices 0, 2, and 4.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int n=10;
  int *p=&n;
  printf("%d %d", n, *p+5);
}`,o:['10 15','10 10','15 15','Compile Error'],a:0,e:'n is 10 and *p+5 evaluates to 15.'},
{s:'PTR',d:'m',q:'What happens when you do "free(NULL)" in C?',o:['Crash/segfault','Nothing; it is explicitly safe','Resets the null pointer','Undefined behavior'],a:1,e:'The C standard guarantees that free(NULL) does nothing.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  int x=10,y=20;
  int *p=&x;
  *p=*p+y;
  printf("%d %d",x,y);
}`,o:['30 20','10 20','20 20','Compile Error'],a:0,e:'x is updated through the pointer to 10+20 = 30.'},
{s:'PTR',d:'m',q:'Which of the following is a correct way to dynamically allocate a 2D array (n rows, m cols)?',o:['int arr[n][m];','int **arr=malloc(n*m*sizeof(int));','int **arr=malloc(n*sizeof(int*)); for(i) arr[i]=malloc(m*sizeof(int));','int *arr=malloc(n*m);'],a:2,e:'The classic pointer-to-pointer approach allocates row pointers first and then each row.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int a=100;
  int *p=&a;
  int *q=p;
  *q=200;
  printf("%d %d",a,*p);
}`,o:['100 100','200 200','100 200','200 100'],a:1,e:'Both pointers refer to the same variable a, so changing through q also changes what p sees.'},
{s:'PTR',d:'h',q:'What is the output?',c:`int main(){
  char s[]="ABCDE";
  char *p=s+2;
  printf("%s",p);
  printf(" %s",p-1);
}`,o:['CDE BCDE','CDE CDE','ABCDE BCDE','Compile Error'],a:0,e:'Starting at C prints CDE, and starting one character earlier prints BCDE.'},
{s:'PTR',d:'m',q:'What is the "arrow operator" (->) used for?',o:['Pointer increment','Accessing a struct or class member through a pointer','Comparing two pointers','Declaring function pointers'],a:1,e:'`ptr->member` is shorthand for `(*ptr).member`.'},
{s:'PTR',d:'h',q:'What is the output?',c:`struct Node{int val; struct Node *next;};
int main(){
  struct Node n1={10,NULL},n2={20,NULL};
  n1.next=&n2;
  printf("%d",n1.next->val);
}`,o:['10','20','NULL','Compile Error'],a:1,e:'n1.next points to n2, so n1.next->val is 20.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int a=5;
  int *p=&a;
  printf("%d",*p++);
  printf(" %d",*p);
}`,o:['5 Garbage','6 Garbage','5 5','Compile Error'],a:0,e:'*p++ prints the value at p and then advances the pointer. Reading the advanced pointer is undefined and may show garbage.'},
{s:'PTR',d:'m',q:'What is the output?',c:`int main(){
  int x=5,*p=&x;
  printf("%d %d %d", x, x*(*p), (*p)++);
  printf(" %d",x);
}`,o:['5 25 5 6','Undefined','5 25 5 5','6 25 5 6'],a:1,e:'The expression both reads and modifies the same object without sequencing, so it is undefined behavior.'},
{s:'PTR',d:'m',q:'What does "volatile int *p" mean?',o:['p cannot be changed','The pointed value may change unexpectedly, so the compiler must not optimize reads/writes away','p points to read-only memory','p is a null pointer'],a:1,e:'volatile is used for hardware registers, ISRs, and other memory that can change outside normal program flow.'},

{s:'OOP',d:'e',q:'Which concept of OOP bundles data and methods into a single unit?',o:['Inheritance','Polymorphism','Encapsulation','Abstraction'],a:2,e:'Encapsulation wraps state and behavior into a class and controls access through methods and access specifiers.'},
{s:'OOP',d:'e',q:'What is the output?',c:`class A{
public: int x=10;
};
int main(){
  A a1,a2;
  a1.x=20;
  cout<<a1.x<<" "<<a2.x;
}`,o:['20 10','10 10','20 20','Compile Error'],a:0,e:'Each object has its own member copy, so changing a1.x does not affect a2.x.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Counter{
  int n;
public:
  Counter():n(0){}
  void inc(){n++;}
  int get(){return n;}
};
int main(){
  Counter c;
  c.inc(); c.inc(); c.inc();
  cout<<c.get();
}`,o:['0','1','3','Compile Error'],a:2,e:'After three calls to inc(), n becomes 3.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Base{
public:
  int x;
  Base(int v):x(v){}
};
class Der:public Base{
public:
  int y;
  Der(int a,int b):Base(a),y(b){}
  void show(){cout<<x<<" "<<y;}
};
int main(){
  Der d(3,7);
  d.show();
}`,o:['3 7','7 3','0 0','Compile Error'],a:0,e:'The base part stores 3 in x and the derived part stores 7 in y.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  int val;
  A(int v):val(v){}
  A operator+(A& b){return A(val+b.val);}
  void print(){cout<<val;}
};
int main(){
  A a(5),b(3);
  (a+b).print();
}`,o:['8','5','3','Compile Error'],a:0,e:'operator+ returns a temporary object with value 8.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Shape{
public:
  virtual double area(){return 0;}
};
class Circle:public Shape{
  double r;
public:
  Circle(double r):r(r){}
  double area(){return 3.14*r*r;}
};
int main(){
  Shape *s=new Circle(2);
  cout<<s->area();
}`,o:['12.56','0','Compile Error','6.28'],a:0,e:'Runtime polymorphism calls Circle::area, giving 3.14*4 = 12.56.'},
{s:'OOP',d:'m',q:'What prints when an object goes out of scope?',c:`class X{
public:
  X(){cout<<"C";}
  ~X(){cout<<"D";}
};
int main(){
  X a,b;
}`,o:['CCDD','CDCD','CCDC','DDCC'],a:0,e:'Constructors run in order a,b and destructors run in reverse order b,a.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  A(){cout<<"A ";}
  virtual ~A(){cout<<"~A ";}
};
class B:public A{
public:
  B(){cout<<"B ";}
  ~B(){cout<<"~B ";}
};
int main(){
  A *p=new B();
  delete p;
}`,o:['A B ~B ~A','A B ~A','B A ~A ~B','A ~A'],a:0,e:'The base constructor runs first, and a virtual destructor ensures the derived destructor runs first on delete.'},
{s:'OOP',d:'m',q:'Which keyword prevents a class from being subclassed in Java?',o:['static','abstract','final','private'],a:2,e:'A final class cannot be extended.'},
{s:'OOP',d:'m',q:'What is multiple inheritance and which issue can it cause?',o:['Inheriting from no class','Inheriting from multiple base classes, which can cause the diamond problem','Inheriting private members only','Inheriting constructors only'],a:1,e:'Multiple inheritance can create ambiguity when two parent classes share a common base.'},
{s:'OOP',d:'e',q:'Which of the following is NOT an OOP principle?',o:['Encapsulation','Polymorphism','Compilation','Inheritance'],a:2,e:'Compilation is not one of the core OOP pillars.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Num{
  int v;
public:
  Num(int x):v(x){}
  Num(Num& o):v(o.v*2){}
  void print(){cout<<v;}
};
int main(){
  Num a(5);
  Num b(a);
  b.print();
}`,o:['5','10','Compile Error','25'],a:1,e:'The custom copy constructor doubles the copied value, so b holds 10.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
  static int n;
public:
  A(){n++;}
  static int getN(){return n;}
};
int A::n=5;
int main(){
  A a,b,c;
  cout<<A::getN();
}`,o:['3','8','5','Compile Error'],a:1,e:'The static counter starts at 5 and increases once per constructed object.'},
{s:'OOP',d:'m',q:'What is the purpose of a virtual destructor?',o:['To prevent deletion','To ensure derived destructors run when deleting through a base pointer','To create abstract classes','To make destructor private'],a:1,e:'Without a virtual destructor, deleting a derived object through a base pointer can leak resources.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Animal{
  string name;
public:
  Animal(string n):name(n){}
  string getName(){return name;}
};
class Dog:public Animal{
public:
  Dog(string n):Animal(n){}
  void bark(){cout<<"Woof from "<<getName();}
};
int main(){
  Dog d("Rex");
  d.bark();
}`,o:['Woof from Rex','Rex','Woof','Compile Error'],a:0,e:'bark calls getName from the base class and prints the stored name.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  void show(int x){cout<<"int:"<<x;}
  void show(double x){cout<<"dbl:"<<x;}
  void show(string x){cout<<"str:"<<x;}
};
int main(){
  A a;
  a.show(3);
  a.show(3.0);
  a.show("hi");
}`,o:['int:3 dbl:3 str:hi','int:3 int:3 str:hi','Compile Error','int:3 dbl:3 int:2'],a:0,e:'The three overloaded methods resolve to int, double, and string respectively.'},
{s:'OOP',d:'m',q:'What is an interface in Java?',o:['A class with private methods only','A reference type whose methods are abstract by default and that supports multiple implementation','A template class','A class with only static methods'],a:1,e:'Interfaces define behavior contracts and are the standard Java way to achieve multiple inheritance of type.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Base{
public:
  int x=10;
  virtual void show(){cout<<"Base:"<<x;}
};
class Der:public Base{
public:
  int x=20;
  void show(){cout<<"Der:"<<x;}
};
int main(){
  Base *b=new Der();
  b->show();
  cout<<" "<<b->x;
}`,o:['Der:20 10','Base:10 10','Der:20 20','Base:10 20'],a:0,e:'Virtual dispatch affects the method call, but data member lookup still uses the static pointer type.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  void f(){cout<<"A::f";}
};
class B:virtual public A{};
class C:virtual public A{};
class D:public B, public C{};
int main(){
  D d;
  d.f();
}`,o:['A::f','Compile Error — ambiguous','A::fA::f','Compile Error — diamond'],a:0,e:'Virtual inheritance ensures D has only one shared A subobject.'},
{s:'OOP',d:'m',q:'What is operator overloading?',o:['Using operators in macros','Defining custom behavior of operators for user-defined types','Inheriting operators from a base class','Redefining all operators automatically'],a:1,e:'C++ lets classes define how operators like +, ==, or [] behave.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{};
class B:public A{};
int main(){
  B b;
  A *p=&b;
  B *q=dynamic_cast<B*>(p);
  cout<<(q!=nullptr?"ok":"fail");
}`,o:['ok','fail','Compile Error','Undefined'],a:0,e:'The downcast succeeds because the object really is a B.'},
{s:'OOP',d:'h',q:'What is the "Rule of Five" in C++11?',o:['A class may have five constructors','If a class manages resources and defines one of destructor/copy/move special members, it should usually define all five relevant ones','Each class should have five methods','Inheritance depth should not exceed five'],a:1,e:'The five special members are destructor, copy ctor, copy assignment, move ctor, and move assignment.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Num{
public:
  int v;
  Num(int x):v(x){}
  bool operator>(Num& b){return v>b.v;}
};
int main(){
  Num a(5),b(3);
  cout<<(a>b)<<" "<<(b>a);
}`,o:['1 0','0 1','1 1','0 0'],a:0,e:'5>3 is true and 3>5 is false.'},
{s:'OOP',d:'m',q:'What is the purpose of the explicit keyword on a constructor?',o:['Makes the constructor faster','Prevents implicit conversions using that constructor','Makes the constructor virtual','Makes the constructor private'],a:1,e:'explicit stops unintended automatic conversions like `X x = 5;`.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class T{
public:
  T(){cout<<"ctor ";}
  T(const T&){cout<<"copy ";}
  T& operator=(const T&){cout<<"assign ";return *this;}
  ~T(){cout<<"dtor ";}
};
int main(){
  T a;
  T b=a;
}`,o:['ctor copy dtor dtor','ctor copy assign dtor dtor','ctor assign dtor dtor','copy copy dtor dtor'],a:0,e:'b is copy-initialized from a, so the copy constructor runs, not assignment.'},
{s:'OOP',d:'m',q:'What is abstract class vs interface in C++?',o:['C++ has no abstract class','An abstract class has at least one pure virtual function; “interface” is just a design pattern using such a class','An interface has concrete methods while abstract class has none','They are exactly the same keyword feature'],a:1,e:'C++ has abstract classes but no dedicated `interface` keyword.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Pair{
public:
  int a,b;
  Pair(int x,int y):a(x),b(y){}
  Pair operator*(int n){return Pair(a*n,b*n);}
};
int main(){
  Pair p(3,4);
  Pair q=p*2;
  cout<<q.a<<" "<<q.b;
}`,o:['6 8','3 4','9 16','Compile Error'],a:0,e:'Multiplying the pair by 2 scales both members.'},
{s:'OOP',d:'h',q:'What is RTTI (Run-Time Type Information)?',o:['A compile-time type check','C++ runtime type support such as typeid and dynamic_cast for polymorphic types','A C struct feature','A Java-only feature'],a:1,e:'RTTI enables safe runtime queries and downcasts on polymorphic objects.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Box{
public:
  int l,w,h;
  Box(int a,int b,int c):l(a),w(b),h(c){}
  int operator()(){return l*w*h;}
};
int main(){
  Box b(2,3,4);
  cout<<b();
}`,o:['24','9','Compile Error','0'],a:0,e:'The function-call operator returns the box volume 2*3*4 = 24.'},
{s:'OOP',d:'m',q:'Inheritance type where all inherited members become private in the derived class:',o:['Public inheritance','Protected inheritance','Private inheritance','Virtual inheritance'],a:2,e:'Private inheritance converts inherited public/protected members into private members of the derived class.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  int x;
  A(int v):x(v){}
  A& operator++(){x++;return *this;}
  A operator++(int){A t=*this;x++;return t;}
};
int main(){
  A a(5);
  A b=a++;
  A c=++a;
  cout<<a.x<<" "<<b.x<<" "<<c.x;
}`,o:['7 5 7','6 5 6','7 6 7','7 5 6'],a:0,e:'Postfix returns the old value 5, then prefix increments to 7 and returns the new value.'},
{s:'OOP',d:'m',q:'What is the Liskov Substitution Principle?',o:['A subclass should have more methods than the parent','Objects of a derived class should be usable wherever base-class objects are expected without breaking correctness','A class should have only one parent','Constructors must always be public'],a:1,e:'LSP is the SOLID rule that says subtype substitution should preserve expected behavior.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
protected:
  int x=5;
};
class B:public A{
public:
  void show(){cout<<x;}
};
int main(){
  B b;
  b.show();
}`,o:['5','0','Compile Error','Garbage'],a:0,e:'Protected members are accessible inside derived-class member functions.'},
{s:'OOP',d:'h',q:'What is a mixin?',o:['A class that cannot be instantiated','A class meant to be combined with others to add a focused behavior','A type of constructor','A virtual function table'],a:1,e:'Mixins provide reusable behavior that can be inherited alongside a primary base class.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
public:
  void f(){cout<<"A";}
};
class B:public A{
public:
  void f(){cout<<"B";}
};
class C:public B{
public:
  void f(){cout<<"C";}
};
int main(){
  C c;
  c.A::f();
  c.f();
}`,o:['AC','BC','AB','Compile Error'],a:0,e:'The qualified call forces A::f, then the regular call uses C::f.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Stack{
  int arr[5],top=-1;
public:
  void push(int x){arr[++top]=x;}
  int pop(){return arr[top--];}
  bool empty(){return top==-1;}
};
int main(){
  Stack s;
  s.push(1);s.push(2);s.push(3);
  cout<<s.pop()<<s.pop()<<s.pop();
}`,o:['321','123','312','213'],a:0,e:'Stack is LIFO, so pops return 3, then 2, then 1.'},
{s:'OOP',d:'m',q:'What is the difference between "is-a" and "has-a" relationships?',o:['"is-a" uses composition, "has-a" uses inheritance','is-a is inheritance and has-a is composition','They are the same','has-a uses public inheritance'],a:1,e:'A Dog is-an Animal, while a Car has-an Engine.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  A(){cout<<"A";}
};
class B{
public:
  B(){cout<<"B";}
};
class C:public A{
  B b;
public:
  C(){cout<<"C";}
};
int main(){
  C c;
}`,o:['ABC','BAC','CAB','BCA'],a:0,e:'Base-class construction happens first, then data members, then the derived constructor body.'},
{s:'OOP',d:'m',q:'What is method hiding in Java?',o:['Making a method private','Defining a static method in a subclass with the same signature as in the parent','Using final on a method','Calling super.method()'],a:1,e:'Static methods are hidden, not overridden, because dispatch is based on the reference type.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Singleton{
  static Singleton* inst;
  Singleton(){}
public:
  static Singleton* get(){
    if(!inst) inst=new Singleton();
    return inst;
  }
  void show(){cout<<"one";}
};
Singleton* Singleton::inst=nullptr;
int main(){
  Singleton::get()->show();
  Singleton::get()->show();
}`,o:['oneone','one','Compile Error','oneNULL'],a:0,e:'Both calls return the same instance and each call to show prints one.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
public:
  int x=1,y=2;
  int sum(){return x+y;}
};
class B:public A{
public:
  int z=3;
  int total(){return sum()+z;}
};
int main(){
  B b;
  cout<<b.total();
}`,o:['6','3','5','Compile Error'],a:0,e:'sum() returns 3 and z is 3, so the total is 6.'},
{s:'OOP',d:'h',q:'What is covariant return type?',o:['A virtual function that returns void','An override that returns a more derived pointer/reference type than the base version','A function returning the same type as its parameter','A constructor returning an object'],a:1,e:'Covariant returns are allowed for compatible pointer/reference return types in virtual overrides.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Vec{
public:
  int x,y;
  Vec(int a,int b):x(a),y(b){}
  Vec operator+(Vec& v){return Vec(x+v.x,y+v.y);}
  friend ostream& operator<<(ostream& os,Vec& v){
    os<<v.x<<","<<v.y; return os;
  }
};
int main(){
  Vec a(1,2),b(3,4);
  Vec c=a+b;
  cout<<c;
}`,o:['4,6','1,2','3,4','Compile Error'],a:0,e:'Vector addition gives components 4 and 6, which operator<< prints.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
public:
  virtual void f()=0;
};
class B:public A{
public:
  void f(){cout<<"B";}
};
int main(){
  B b;
  A *p=&b;
  p->f();
}`,o:['B','A','Compile Error','Segfault'],a:0,e:'B implements the pure virtual function, so calling through the base pointer prints B.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class Time{
public:
  int h,m;
  Time(int a,int b):h(a),m(b){}
  void operator+=(Time& t){h+=t.h;m+=t.m;}
  void show(){cout<<h<<":"<<m;}
};
int main(){
  Time t1(2,30),t2(1,20);
  t1+=t2;
  t1.show();
}`,o:['3:50','2:30','1:20','Compile Error'],a:0,e:'The += operator adds both hour and minute fields.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  int x;
  A(int v):x(v){}
  virtual A* clone(){return new A(x);}
};
class B:public A{
public:
  B(int v):A(v){}
  B* clone(){return new B(x*2);}
};
int main(){
  A *p=new B(5);
  A *q=p->clone();
  cout<<q->x;
}`,o:['10','5','Compile Error','0'],a:0,e:'Virtual dispatch calls B::clone, which builds a B using x*2, so q->x is 10.'},
{s:'OOP',d:'m',q:'What does the "friend" keyword in C++ do?',o:['Makes a function/class a member','Grants a non-member function or class access to private/protected members','Makes all members public','Allows private inheritance'],a:1,e:'friend is an explicit way to grant external access to internals.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
  int x;
public:
  A(int v):x(v){}
  void print()const{cout<<x;}
  bool operator==(const A& o)const{return x==o.x;}
};
int main(){
  A a(5),b(5),c(6);
  cout<<(a==b)<<" "<<(a==c);
}`,o:['1 0','0 1','1 1','0 0'],a:0,e:'5 equals 5 but does not equal 6, so it prints 1 0.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class Arr{
  int *data;
  int sz;
public:
  Arr(int n):sz(n){data=new int[n]();}
  ~Arr(){delete[] data;}
  int& operator[](int i){return data[i];}
};
int main(){
  Arr a(5);
  a[2]=42;
  cout<<a[2];
}`,o:['42','0','Compile Error','Garbage'],a:0,e:'operator[] returns a reference, so assignment through it updates the underlying array.'},
{s:'OOP',d:'m',q:'What is the "this" pointer in a static method?',o:['Points to the class definition','It does not exist in static methods','Points to the last created object','Points to the first created object'],a:1,e:'Static member functions are not tied to any object instance.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
public:
  int x=10;
  int getX()const{return x;}
};
int main(){
  const A a;
  cout<<a.getX();
}`,o:['10','0','Compile Error','Garbage'],a:0,e:'Const objects can call const member functions, and getX returns 10.'},
{s:'OOP',d:'h',q:'What is the output?',c:`class A{
public:
  A(int x){cout<<x<<" ";}
};
class B:public A{
  A a2;
public:
  B():A(1),a2(2){cout<<3<<" ";}
};
int main(){
  B b;
}`,o:['1 2 3','3 1 2','2 1 3','1 3 2'],a:0,e:'Base A(1) constructs first, then member a2(2), then the B constructor body prints 3.'},
{s:'OOP',d:'m',q:'What is an abstract data type (ADT)?',o:['A C struct with function pointers','A mathematical model of data defined by behavior rather than implementation','An abstract class in C++','A data type with no values'],a:1,e:'An ADT specifies what operations exist, not how they are implemented.'},
{s:'OOP',d:'m',q:'What is the output?',c:`class A{
public:
  void f(){cout<<"A::f ";}
  virtual void g(){cout<<"A::g ";}
};
class B:public A{
public:
  void f(){cout<<"B::f ";}
  void g(){cout<<"B::g ";}
};
int main(){
  A a; B b;
  A &r=b;
  r.f(); r.g();
  a.f(); a.g();
}`,o:['A::f B::g A::f A::g','B::f B::g A::f A::g','A::f A::g A::f A::g','B::f A::g A::f A::g'],a:0,e:'Non-virtual f uses the reference type A, while virtual g dispatches to B::g.'},
{s:'OOP',d:'h',q:'What is the output?',c:`template<typename T>
T maxVal(T a, T b){return a>b?a:b;}
int main(){
  cout<<maxVal(5,3)<<" ";
  cout<<maxVal(2.5,4.7)<<" ";
  cout<<maxVal('a','z');
}`,o:['5 4.7 z','3 2.5 a','5 2.5 z','Compile Error'],a:0,e:'The template returns the larger of each pair: 5, 4.7, and z.'},

{s:'DSA',d:'e',q:'What is the time complexity of accessing an element at index i in an array?',o:['O(n)','O(log n)','O(1)','O(i)'],a:2,e:'Array indexing is direct, so access time is constant.'},
{s:'DSA',d:'m',q:'What is the output of this linked list traversal?',c:`// List: 1->2->3->4->5->NULL
// Code: while(curr){ cout<<curr->data<<" "; curr=curr->next; }`,o:['5 4 3 2 1','1 2 3 4 5','1 2 3 4','2 3 4 5'],a:1,e:'A standard forward traversal prints the nodes in order from head to tail.'},
{s:'DSA',d:'m',q:'What is the time complexity of inserting a node at the beginning of a singly linked list?',o:['O(n)','O(log n)','O(1)','O(n log n)'],a:2,e:'Changing the head pointer is constant time.'},
{s:'DSA',d:'h',q:'What is the height of a complete binary tree with 15 nodes?',o:['3','4','5','2'],a:0,e:'A perfect tree with 15 nodes has 4 levels, which means height 3 if height is counted in edges.'},
{s:'DSA',d:'m',q:'Which of the following gives the correct postorder traversal of a tree with root 1, left child 2, right child 3?',o:['1 2 3','2 3 1','2 1 3','3 2 1'],a:1,e:'Postorder visits left subtree, right subtree, then root.'},
{s:'DSA',d:'m',q:'What is the worst-case time complexity of searching in an unsorted array?',o:['O(1)','O(log n)','O(n)','O(n²)'],a:2,e:'In the worst case you may have to inspect every element.'},
{s:'DSA',d:'m',q:'Stack overflow in recursion occurs when:',o:['Too many variables declared','The recursion depth exceeds the call stack size','Stack has more than n elements','A loop runs too long'],a:1,e:'Every recursive call uses stack space, so deep or infinite recursion overflows the stack.'},
{s:'DSA',d:'h',q:'What is the time complexity of the given algorithm?',c:`for(int i=1;i<=n;i*=2)
  for(int j=0;j<n;j++)
    cout<<i+j;`,o:['O(n)','O(n log n)','O(n²)','O(log n)'],a:1,e:'The outer loop runs log n times and the inner loop runs n times.'},
{s:'DSA',d:'m',q:'Which operation is O(1) for a queue implemented with a linked list and head/tail pointers?',o:['Both enqueue and dequeue','Only enqueue','Only dequeue','Neither'],a:0,e:'With both ends tracked, insertion at tail and removal at head are constant time.'},
{s:'DSA',d:'m',q:'What is the output?',c:`// Stack operations:
push(5), push(3), push(8), push(1)
pop(), peek(), pop()`,o:['1, 8, 3','1, 3, 8','8, 1, 3','1, 8, 8'],a:3,e:'After pushing 5,3,8,1: pop gives 1, peek gives 8, and the next pop also gives 8.'},
{s:'DSA',d:'h',q:'What algorithm is this?',c:`while(n>0){
  int r=n%10;
  sum+=r*r*r;
  n/=10;
}
return (sum==original);`,o:['Palindrome check','Prime check','Armstrong number check','Perfect number check'],a:2,e:'It sums cubes of digits and compares with the original number, which is an Armstrong-number test.'},
{s:'DSA',d:'m',q:'What is the space complexity of a recursive implementation of factorial(n)?',o:['O(1)','O(log n)','O(n)','O(n²)'],a:2,e:'The recursion depth is n, so the call stack uses O(n) space.'},
{s:'DSA',d:'m',q:'Which of the following is true about BST property?',o:['Left child > parent','Right child < parent','Left subtree values are less than root and right subtree values are greater','All leaves are on the same level'],a:2,e:'That ordering is what defines a binary search tree.'},
{s:'DSA',d:'h',q:'What is the output of this code?',c:`// Binary tree level order traversal
// Tree:     1
//          / \\
//         2   3
//        / \\
//       4   5`,o:['1 2 4 5 3','1 2 3 4 5','4 5 2 3 1','1 3 2 5 4'],a:1,e:'Level-order traversal visits nodes breadth-first: 1, then 2 and 3, then 4 and 5.'},
{s:'DSA',d:'m',q:'What does the following code check?',c:`int n=num,rev=0;
while(n>0){ rev=rev*10+n%10; n/=10; }
return num==rev;`,o:['Armstrong number','Prime number','Palindrome number','Perfect number'],a:2,e:'It reverses the digits and compares the reverse with the original number.'},
{s:'DSA',d:'h',q:'What is the time complexity of quickselect (finding k-th smallest)?',o:['O(n²)','O(n log n)','O(n) average','O(log n)'],a:2,e:'Quickselect is linear on average, though worst-case is quadratic.'},
{s:'DSA',d:'m',q:'Which of the following is NOT an application of a stack?',o:['Function call management','Undo operations in editors','Printer job scheduling','Expression evaluation'],a:2,e:'Printer jobs are naturally FIFO, so a queue is used instead of a stack.'},
{s:'DSA',d:'m',q:'What is the minimum number of nodes in an AVL tree of height h?',o:['2^h - 1','h+1','N(h) = N(h-1) + N(h-2) + 1','2h'],a:2,e:'The minimum-node recurrence for AVL trees follows the Fibonacci-like relation shown.'},
{s:'DSA',d:'h',q:'What does this algorithm produce?',c:`// Input: [64,34,25,12,22,11,90]
// After 1st pass of outer loop...
// [34,25,12,22,11,64,90]`,o:['Insertion Sort pass','Merge Sort merge','Selection Sort swap','Bubble Sort pass'],a:3,e:'Bubble sort moves the largest remaining element to the end after each pass.'},
{s:'DSA',d:'m',q:'What is the time complexity of Radix Sort for n integers with d digits and base b?',o:['O(n²)','O(d(n+b))','O(n log n)','O(n d)'],a:1,e:'Each of the d passes costs O(n+b), so the total is O(d(n+b)).'},
{s:'DSA',d:'m',q:'What is a degenerate BST and when does it occur?',o:['A BST with only leaf nodes','A BST that becomes like a linked list when inserted data is sorted','A BST with height 1','A BST with no left subtrees'],a:1,e:'Sorted insertions into an ordinary BST create a skewed tree with poor performance.'},
{s:'DSA',d:'h',q:'What is the output?',c:`// Merge sort on [5,2,8,1,9,3]
// Final sorted array:`,o:['[1,2,3,5,8,9]','[2,5,1,8,3,9]','[9,8,5,3,2,1]','[1,3,2,8,5,9]'],a:0,e:'Merge sort outputs the elements in ascending order.'},
{s:'DSA',d:'m',q:'What is the difference between BFS and DFS for finding paths?',o:['BFS always finds the longest path','BFS finds shortest path in unweighted graphs, DFS may not','They are identical','DFS always uses less memory'],a:1,e:'BFS explores in layers, so it finds minimum-hop paths in unweighted graphs.'},
{s:'DSA',d:'m',q:'In hash chaining, what is the average time for search when n keys and m buckets are used?',o:['O(n)','O(1+n/m)','O(n/m)','O(log n)'],a:1,e:'Average search cost is constant plus the load factor alpha = n/m.'},
{s:'DSA',d:'h',q:'What is the output of Dijkstra\'s algorithm on this graph?',c:`Nodes: A,B,C. Edges: A-B=4, A-C=2, B-C=1
Start: A. Shortest path to B?`,o:['4','3','2','1'],a:1,e:'Going from A to C to B costs 2+1 = 3, which beats the direct edge of 4.'},
{s:'DSA',d:'m',q:'Which data structure is used in topological sorting using Kahn\'s algorithm?',o:['Stack','Queue','Priority Queue','Hash Map'],a:1,e:'Kahn\'s algorithm repeatedly removes zero-indegree nodes from a queue.'},
{s:'DSA',d:'m',q:'What is the time complexity of inserting into a sorted array?',o:['O(1)','O(log n)','O(n)','O(n log n)'],a:2,e:'Finding the spot may be faster, but shifting elements still takes linear time.'},
{s:'DSA',d:'h',q:'What is the recurrence for binary search and its solution?',o:['T(n)=T(n-1)+O(1); O(n)','T(n)=T(n/2)+O(1); O(log n)','T(n)=2T(n/2)+O(n); O(n log n)','T(n)=T(n/2)+O(n); O(n)'],a:1,e:'Binary search cuts the problem size in half each step.'},
{s:'DSA',d:'m',q:'What is a circular linked list used for?',o:['Reversing data','Round-robin style traversal problems and circular buffers','Sorting algorithms','Direct memory access'],a:1,e:'Circular lists are useful when traversal must naturally wrap around to the beginning.'},
{s:'DSA',d:'h',q:'What is the output?',c:`// Preorder of this BST (insert order: 5,3,7,2,4,6,8):
// Preorder: root, left, right`,o:['5 3 2 4 7 6 8','2 3 4 5 6 7 8','5 7 6 8 3 2 4','8 7 6 5 4 3 2'],a:0,e:'Preorder visits root first, then the left subtree, then the right subtree.'},
{s:'DSA',d:'m',q:'What is a priority queue?',o:['A queue that always uses FIFO','A data structure where higher- or lower-priority elements are removed first','A queue with limited capacity','A sorted array'],a:1,e:'Priority queues remove based on priority rather than arrival order.'},
{s:'DSA',d:'m',q:'What is the time complexity of finding the k-th largest element using a min-heap of size k?',o:['O(n log n)','O(n log k)','O(k)','O(n)'],a:1,e:'Maintaining a heap of k elements across n inputs costs O(n log k).'},
{s:'DSA',d:'h',q:'What does the Union-Find data structure support efficiently?',o:['Sorting elements','Maintaining disjoint sets and answering connectivity queries','BFS traversal','Shortest path'],a:1,e:'Union-Find is designed for set merging and representative lookups.'},
{s:'DSA',d:'m',q:'What is the time complexity of the naive string matching algorithm?',o:['O(n)','O(m)','O(nm)','O(n+m)'],a:2,e:'The pattern may need to be compared at each position of the text.'},
{s:'DSA',d:'m',q:'What is memoization in dynamic programming?',o:['Sorting subproblems','Caching subproblem results to avoid recomputation in a top-down approach','Bottom-up DP only','Recursion without base cases'],a:1,e:'Memoization stores function results so repeated subproblems are solved once.'},
{s:'DSA',d:'h',q:'What is the time complexity of 0/1 Knapsack solved with DP?',o:['O(n)','O(nW)','O(n log n)','O(2^n)'],a:1,e:'The standard table has n rows and W columns.'},
{s:'DSA',d:'m',q:'What is the output?',c:`// Graph edges: 0-1, 0-2, 1-3, 2-3
// BFS from 0:`,o:['0 1 2 3','0 2 1 3','0 1 3 2','3 2 1 0'],a:0,e:'BFS starting at 0 visits neighbors level by level.'},
{s:'DSA',d:'m',q:'Which algorithm grows an MST by repeatedly extending the current tree with the cheapest outgoing edge?',o:['Kruskal\'s','Prim\'s','Dijkstra\'s','Bellman-Ford'],a:1,e:'That is Prim\'s MST algorithm.'},
{s:'DSA',d:'h',q:'What is the LCS (Longest Common Subsequence) of "ABCD" and "ACBD"?',o:['"ABD" (length 3)','ABC (length 3)','ABCD (length 4)','AB (length 2)'],a:0,e:'ABD is one valid longest common subsequence of length 3.'},
{s:'DSA',d:'m',q:'What is the time complexity of finding the diameter of a binary tree?',o:['O(n²)','O(n)','O(n log n)','O(log n)'],a:1,e:'A single DFS can compute subtree heights and update diameter in one pass.'},
{s:'DSA',d:'m',q:'What is the output of reversing a linked list?',c:`// Input: 1->2->3->4->5->NULL
// After reverse:`,o:['5->4->3->2->1->NULL','1->2->3->4->5->NULL','1->5->2->4->3->NULL','NULL->1->2->3->4->5'],a:0,e:'Reversing the next pointers flips the list order.'},
{s:'DSA',d:'h',q:'What is the time complexity of building a suffix array naively?',o:['O(n)','O(n log n)','O(n² log n)','O(n³)'],a:2,e:'Generating and comparing many suffix strings naively is expensive.'},
{s:'DSA',d:'m',q:'What does the "two-pointer" technique help with?',o:['Tree traversal','Efficient work on sorted arrays or windows using two moving indices','Graph BFS','Hash collisions'],a:1,e:'Two pointers reduce many quadratic scans to linear time.'},
{s:'DSA',d:'m',q:'What is the output of this two-pointer code?',c:`// arr=[1,2,3,4,5,6,7,8,9,10], target=11
// Find all pairs summing to target using two pointers`,o:['(1,10),(2,9),(3,8),(4,7),(5,6)','(1,10) only','No pairs','(2,9),(3,8) only'],a:0,e:'All symmetric pairs around 5.5 sum to 11.'},
{s:'DSA',d:'h',q:'What is the output?',c:`// Count inversions in [2,4,1,3,5]
// An inversion: i<j but arr[i]>arr[j]`,o:['3','2','4','5'],a:0,e:'The inversions are (2,1), (4,1), and (4,3).'},
{s:'DSA',d:'m',q:'What is the maximum sum subarray algorithm?',o:['Merge Sort','Kadane\'s Algorithm','Dijkstra\'s Algorithm','Floyd-Warshall'],a:1,e:'Kadane\'s algorithm finds the maximum-sum contiguous subarray in linear time.'},
{s:'DSA',d:'m',q:'What is the time complexity of Kadane\'s Algorithm?',o:['O(n²)','O(n log n)','O(n)','O(log n)'],a:2,e:'It processes each element once.'},
{s:'DSA',d:'h',q:'What is the maximum sum subarray of [-2, 1, -3, 4, -1, 2, 1, -5, 4]?',o:['4','5','6','7'],a:2,e:'The best contiguous segment is [4,-1,2,1], which sums to 6.'},
{s:'DSA',d:'m',q:'In a min-heap, after extracting the minimum, how is the heap property restored?',o:['Rebuild entire heap','Move the last element to the root and sift down','Sort all elements','Swap root with one child once'],a:1,e:'Heapify-down restores the min-heap ordering.'},
{s:'DSA',d:'m',q:'What is the output?',c:`// Inorder traversal of BST gives: [1,2,3,4,5,6,7]
// What is the root if the BST was built by inserting elements
// in the order: 4,2,6,1,3,5,7?`,o:['1','4','7','2'],a:1,e:'The first inserted element becomes the root.'},
{s:'DSA',d:'h',q:'What is the time complexity of checking if a binary tree is a BST?',o:['O(n²)','O(n)','O(n log n)','O(log n)'],a:1,e:'One inorder or min/max validation pass is enough.'},
{s:'DSA',d:'m',q:'What data structure is used to implement a browser back button?',o:['Queue','Heap','Stack','Graph'],a:2,e:'Back navigation naturally follows LIFO order.'},
{s:'DSA',d:'m',q:'Insertion Sort is efficient when:',o:['The array is large and random','The array is small or nearly sorted','The array has duplicates only','The array has negative numbers'],a:1,e:'Insertion sort is adaptive and performs well on nearly sorted input.'},
{s:'DSA',d:'h',q:'What is the output of this graph algorithm?',c:`// Detect if this is a DAG:
// Edges: 1->2, 2->3, 3->1 (cycle!)`,o:['Is a DAG','Not a DAG (has cycle)','Disconnected graph','Bipartite graph'],a:1,e:'A directed cycle means the graph is not acyclic.'},
{s:'DSA',d:'m',q:'What is the output of delete operation in a BST for node with two children?',o:['Delete the node and both children','Replace with inorder successor, then delete that successor','Always use inorder predecessor only','Replace with root'],a:1,e:'The standard deletion method copies the inorder successor value into the node.'},
{s:'DSA',d:'m',q:'What does this function compute?',c:`int f(int n){
  if(n<=1) return 1;
  return n*f(n-1);
}`,o:['nth Fibonacci','Sum 1 to n','Factorial of n','2^n'],a:2,e:'The recurrence is factorial.'},
{s:'DSA',d:'h',q:'What is the output?',c:`int f(int n){
  if(n<=0) return 0;
  return f(n/2) + n%2;
}
// f(13) = ?`,o:['2','3','4','5'],a:1,e:'It counts set bits. 13 in binary is 1101, which has 3 ones.'},
{s:'DSA',d:'m',q:'Prim\'s and Kruskal\'s algorithms are both used for:',o:['Shortest path in directed graphs','Minimum spanning tree in weighted undirected graphs','Topological sorting','All-pairs shortest paths'],a:1,e:'Both algorithms solve the MST problem.'},
{s:'DSA',d:'m',q:'What is the time complexity of Prim\'s MST with a binary heap?',o:['O(V²)','O(E log V)','O(V log E)','O(E+V)'],a:1,e:'The binary-heap implementation processes edges with logarithmic priority-queue updates.'},
{s:'DSA',d:'h',q:'What is dynamic programming\'s principle?',o:['Always use greedy choices','Solve overlapping subproblems once and reuse stored answers','Divide and conquer without storage','Random sampling'],a:1,e:'DP combines optimal substructure with reused solutions to overlapping subproblems.'},
{s:'DSA',d:'m',q:'What is the output of this code?',c:`// Find duplicate in array [1,3,4,2,2]:
// Use Floyd\'s cycle detection`,o:['2','1','3','4'],a:0,e:'The duplicate value is 2.'},
{s:'DSA',d:'m',q:'What is a trie (prefix tree)?',o:['A balanced BST','A character-by-character tree used for prefix search','A min-heap variant','A hash table'],a:1,e:'Tries store strings by branching on characters.'},
{s:'DSA',d:'h',q:'What is the time complexity of Bellman-Ford algorithm?',o:['O(V log E)','O(V + E)','O(VE)','O(V²)'],a:2,e:'Each of the V-1 passes relaxes every edge.'},
{s:'DSA',d:'m',q:'Which problem is solved by the sliding window technique?',o:['Sorting an array','Finding a fixed-size maximum/minimum sum subarray in O(n)','Inverting a binary tree','Finding shortest path'],a:1,e:'Sliding windows update the answer incrementally as the window moves.'},
{s:'DSA',d:'h',q:'What is the output?',c:`// Quick Sort on [3,6,8,10,1,2,1] with last element as pivot:
// After first partition (pivot=1):`,o:['[1,1,...pivot...3,6,8,10,2]','[1,6,8,10,1,2,3]','[1,2,3,6,8,10,1]','All elements before 1 and after 1'],a:0,e:'The partition step groups elements <= pivot to the left and larger ones to the right.'}
];

const MASTER_RAW_SECONDARY = [
  {s:'SQL',q:'Which SQL statement is used to extract data from a database?',o:['SELECT','GET','OPEN','RETRIEVE'],a:0,e:'SELECT is the standard DML statement for querying data from one or more tables.'},
  {s:'SQL',q:'Which command is used to delete a table in SQL?',o:['DELETE','DROP','REMOVE','ERASE'],a:1,e:'DROP TABLE removes the table structure and all its data permanently.'},
  {s:'SQL',q:'What does the WHERE clause do in SQL?',o:['Specifies the table to query','Specifies columns to retrieve','Filters records based on a condition','Orders the result set'],a:2,e:'WHERE clause filters the rows returned by a query based on specified conditions.'},
  {s:'SQL',q:'Which SQL keyword is used to sort the result set?',o:['SORT BY','ORDER BY','GROUP BY','ARRANGE BY'],a:1,e:'ORDER BY clause sorts the result set in ascending (default) or descending order.'},
  {s:'SQL',q:'What does ACID stand for in database transactions?',o:['Atomicity, Consistency, Isolation, Durability','Access, Control, Integrity, Distribution','Aggregation, Constraints, Indexing, Dependencies','Association, Concurrency, Inheritance, Data'],a:0,e:'ACID guarantees that database transactions are processed reliably.'},
  {s:'SQL',q:'Which SQL function returns the number of rows in a table?',o:['SUM()','COUNT()','TOTAL()','NUM()'],a:1,e:'COUNT() returns the number of rows that match a specified condition.'},
  {s:'SQL',q:'What is the purpose of a PRIMARY KEY?',o:['Allows NULL values','Uniquely identifies each row in a table','Links two tables together','Speeds up queries'],a:1,e:'A PRIMARY KEY uniquely identifies each record in a table and cannot be NULL.'},
  {s:'SQL',q:'Which JOIN returns all rows from both tables, with NULLs for non-matching rows?',o:['INNER JOIN','LEFT JOIN','RIGHT JOIN','FULL OUTER JOIN'],a:3,e:'FULL OUTER JOIN returns all rows from both tables with NULL where there is no match.'},
  {s:'SQL',q:'Which SQL command is used to insert new records?',o:['ADD','CREATE','INSERT INTO','UPDATE'],a:2,e:'INSERT INTO adds new rows of data to a table.'},
  {s:'SQL',q:'What does the DISTINCT keyword do in SQL?',o:['Removes duplicate rows','Sorts results','Groups results','Filters NULL values'],a:0,e:'DISTINCT eliminates duplicate rows from the result set.'},
  {s:'SQL',q:'Which clause is used with aggregate functions to group results?',o:['HAVING','WHERE','ORDER BY','GROUP BY'],a:3,e:'GROUP BY groups rows sharing a common value so aggregate functions can be applied.'},
  {s:'SQL',q:'What is the difference between DELETE and TRUNCATE?',o:['No difference','DELETE removes all rows without logging; TRUNCATE logs each row','DELETE can have WHERE clause; TRUNCATE removes all rows','TRUNCATE can have WHERE clause; DELETE cannot'],a:2,e:'DELETE removes specific rows (supports WHERE); TRUNCATE removes all rows quickly without logging individual rows.'},
  {s:'SQL',q:'Which SQL aggregate function returns the highest value?',o:['HIGH()','MAX()','GREATEST()','TOP()'],a:1,e:'MAX() returns the maximum value in a column.'},
  {s:'SQL',q:'What is a FOREIGN KEY?',o:['A key that uniquely identifies a row','A key that links two tables by referencing the primary key of another table','A key that allows NULL values','A composite key'],a:1,e:'A FOREIGN KEY creates a referential link between two tables.'},
  {s:'SQL',q:'Which SQL command modifies existing records?',o:['MODIFY','CHANGE','UPDATE','ALTER'],a:2,e:'UPDATE modifies existing data in a table.'},
  {s:'SQL',q:'What does the HAVING clause do?',o:['Filters rows before grouping','Filters groups after GROUP BY','Sorts the result','Joins two tables'],a:1,e:'HAVING filters the result of GROUP BY aggregation, similar to WHERE but for groups.'},
  {s:'SQL',q:'Which operator is used in SQL for pattern matching?',o:['MATCH','LIKE','EQUAL','FIND'],a:1,e:'LIKE is used with wildcards (% and _) for pattern matching in strings.'},
  {s:'SQL',q:'What is normalization in databases?',o:['Speeding up queries','Removing redundancy and organizing data efficiently','Encrypting data','Backing up data'],a:1,e:'Normalization reduces data redundancy and improves data integrity.'},
  {s:'SQL',q:'Which normal form eliminates transitive dependencies?',o:['1NF','2NF','3NF','BCNF'],a:2,e:'3NF ensures no transitive dependency; non-key attributes depend only on the primary key.'},
  {s:'SQL',q:'What is the purpose of an INDEX in SQL?',o:['Define a unique key','Speed up data retrieval','Enforce data integrity','Create a foreign key'],a:1,e:'Indexes provide a quick access path to data, speeding up SELECT queries.'},
  {s:'SQL',q:'Which SQL statement combines results of two SELECT queries?',o:['MERGE','JOIN','UNION','COMBINE'],a:2,e:'UNION combines the result sets of two or more SELECT statements (removes duplicates by default).'},
  {s:'SQL',q:'What is a VIEW in SQL?',o:['A physical copy of a table','A virtual table based on a SELECT query','A stored procedure','An index'],a:1,e:'A VIEW is a named virtual table derived from a SQL query, stored as a definition.'},
  {s:'SQL',q:'Which SQL function returns the current date and time?',o:['GETDATE() / NOW()','TODAY()','CURRENT()','DATETIME()'],a:0,e:'NOW() in MySQL or GETDATE() in SQL Server returns the current date and time.'},
  {s:'SQL',q:'What does the CASCADE keyword do in foreign key constraints?',o:['Prevents deletion of referenced rows','Automatically updates/deletes related rows when parent is updated/deleted','Enforces uniqueness','Creates an index'],a:1,e:'CASCADE propagates the parent record\'s delete/update action to child records.'},
  {s:'SQL',q:'Which SQL data type is used for storing variable-length character strings?',o:['CHAR','VARCHAR','TEXT','STRING'],a:1,e:'VARCHAR stores variable-length character strings up to a specified maximum length.'},
  {s:'SQL',q:'What is the result of SELECT 5 % 2 in SQL?',o:['2','2.5','1','0'],a:2,e:'The modulo operator returns the remainder; 5 divided by 2 = 2 remainder 1.'},
  {s:'SQL',q:'What does COALESCE() function return?',o:['The sum of values','The first non-NULL value from the list','The maximum value','The count of NULL values'],a:1,e:'COALESCE returns the first non-NULL expression among its arguments.'},
  {s:'SQL',q:'Which clause limits the number of rows returned?',o:['ROWNUM','TOP / LIMIT','FETCH','All of the above'],a:3,e:'TOP (SQL Server), LIMIT (MySQL), and FETCH FIRST (standard SQL) all limit row count.'},
  {s:'SQL',q:'What is the purpose of a stored procedure?',o:['A query that retrieves data from multiple tables','A set of SQL statements saved as a named object','An encrypted key','A constraint for data consistency'],a:1,e:'Stored procedures are precompiled SQL code that can be reused and executed on demand.'},
  {s:'SQL',q:'Which SQL command changes the structure of an existing table?',o:['MODIFY TABLE','CHANGE TABLE','ALTER TABLE','UPDATE TABLE'],a:2,e:'ALTER TABLE is used to add, delete, or modify columns in an existing table.'},
  {s:'SQL',q:'What is a TRANSACTION in SQL?',o:['A single SQL query','A sequence of operations performed as a single unit of work','A table relationship','A backup operation'],a:1,e:'A transaction groups SQL operations so they either all succeed (COMMIT) or all fail (ROLLBACK).'},
  {s:'SQL',q:'Which isolation level prevents dirty reads?',o:['READ UNCOMMITTED','READ COMMITTED','REPEATABLE READ','SERIALIZABLE'],a:1,e:'READ COMMITTED prevents dirty reads by only reading committed data.'},
  {s:'SQL',q:'What does the SQL keyword BETWEEN do?',o:['Filters rows between two tables','Selects values within a given range (inclusive)','Performs a UNION','Groups data'],a:1,e:'BETWEEN filters values within a specified range, inclusive of both endpoints.'},
  {s:'SQL',q:'Which SQL function converts a string to uppercase?',o:['TOUPPER()','UPPERCASE()','UPPER()','CAPS()'],a:2,e:'UPPER() converts a string to all uppercase characters.'},
  {s:'SQL',q:'What is a SUBQUERY?',o:['A query inside another query','A query that joins two tables','A stored procedure','A trigger'],a:0,e:'A subquery is a query nested inside another SQL statement.'},
  {s:'SQL',q:'Which SQL JOIN returns only rows with matching values in both tables?',o:['LEFT JOIN','FULL OUTER JOIN','INNER JOIN','CROSS JOIN'],a:2,e:'INNER JOIN returns only the rows where there is a match in both tables.'},
  {s:'SQL',q:'What is the purpose of ROLLBACK in SQL?',o:['Saves changes permanently','Undoes uncommitted changes','Creates a backup','Drops a table'],a:1,e:'ROLLBACK reverts the database to its state before the transaction began.'},
  {s:'SQL',q:'Which SQL clause is used to create a condition for aggregate functions?',o:['WHERE','HAVING','FILTER','CONDITION'],a:1,e:'HAVING is used instead of WHERE when filtering aggregated results.'},
  {s:'SQL',q:'What is a TRIGGER in SQL?',o:['A scheduled job','Automatic action executed when a DML event occurs','A type of JOIN','An index type'],a:1,e:'Triggers are procedures that run automatically on INSERT, UPDATE, or DELETE events.'},
  {s:'SQL',q:'What does SELECT * FROM employees LIMIT 5 return?',o:['Last 5 rows','First 5 rows','5 random rows','Total count of 5'],a:1,e:'LIMIT 5 restricts the result set to the first 5 rows returned.'},
  {s:'SQL',q:'Which constraint ensures a column cannot have NULL values?',o:['NOT NULL','UNIQUE','CHECK','DEFAULT'],a:0,e:'NOT NULL constraint prevents a column from accepting NULL values.'},
  {s:'SQL',q:'What is denormalization?',o:['Process of reducing redundancy','Intentionally introducing redundancy to improve read performance','Removing a table','Encrypting data'],a:1,e:'Denormalization adds redundancy to speed up read queries at the cost of write complexity.'},
  {s:'SQL',q:'Which function returns the length of a string in SQL?',o:['SIZE()','LENGTH() / LEN()','COUNT()','STRLEN()'],a:1,e:'LENGTH() in MySQL/PostgreSQL and LEN() in SQL Server return the character count.'},
  {s:'SQL',q:'What is the syntax for creating a table?',o:['MAKE TABLE tablename','NEW TABLE tablename','CREATE TABLE tablename','BUILD TABLE tablename'],a:2,e:'CREATE TABLE is the DDL command for creating a new table.'},
  {s:'SQL',q:'Which SQL keyword is used to add a condition to prevent duplicate rows in UNION?',o:['UNION ALL','UNION DISTINCT','UNION','MERGE'],a:2,e:'UNION without ALL automatically removes duplicate rows from the combined results.'},
  {s:'SQL',q:'In SQL, what is the default sort order of ORDER BY?',o:['DESC','RANDOM','ASC','NONE'],a:2,e:'ORDER BY defaults to ascending order unless DESC is specified.'},
  {s:'SQL',q:'What does the SQL AVG() function return?',o:['Highest value','Lowest value','Sum of all values','Average (mean) of a numeric column'],a:3,e:'AVG() calculates the arithmetic mean of a set of values.'},
  {s:'SQL',q:'Which SQL statement is used to grant user privileges?',o:['GRANT','ALLOW','PERMIT','AUTHORIZE'],a:0,e:'GRANT is used to give specific privileges to users or roles.'},
  {s:'SQL',q:'What is a composite key?',o:['A key made of a single column','A key using two or more columns to uniquely identify a row','A key that references another table','A key that auto-increments'],a:1,e:'A composite key uses multiple columns together to uniquely identify a row.'},
  {s:'SQL',q:'Which SQL function rounds a number to the nearest integer?',o:['ROUND()','CEIL()','FLOOR()','INT()'],a:0,e:'ROUND() rounds to a specified number of decimal places.'},
  {s:'SQL',q:'What is the purpose of the SQL IN operator?',o:['Checks if a value is within a range','Checks if a value matches any value in a list','Joins two tables','Performs pattern matching'],a:1,e:'IN checks whether a value matches any value in a specified list.'},
  {s:'SQL',q:'Which type of index allows duplicate values?',o:['UNIQUE index','PRIMARY index','Non-unique index','Clustered index'],a:2,e:'Regular non-unique indexes allow duplicates.'},
  {s:'SQL',q:'What does DDL stand for in SQL?',o:['Data Definition Language','Data Derivation Language','Data Display Language','Data Distribution Language'],a:0,e:'DDL defines database structures such as tables and schemas.'},
  {s:'SQL',q:'What does DML stand for?',o:['Data Manipulation Language','Data Management Language','Data Mapping Logic','Data Merging Language'],a:0,e:'DML covers commands that query and change data.'},
  {s:'SQL',q:'Which SQL clause filters rows BEFORE aggregation?',o:['HAVING','ORDER BY','WHERE','GROUP BY'],a:2,e:'WHERE filters individual rows before grouping.'},
  {s:'SQL',q:'What is a NULL value in SQL?',o:['Zero','Empty string','Unknown or missing value','False'],a:2,e:'NULL represents the absence of a value.'},
  {s:'SQL',q:'Which SQL command removes all rows from a table but keeps the structure?',o:['DROP','DELETE','TRUNCATE','CLEAR'],a:2,e:'TRUNCATE clears table data while keeping the schema.'},
  {s:'SQL',q:'Which SQL operator is used to compare with NULL?',o:['= NULL','IS NULL','== NULL','EQUALS NULL'],a:1,e:'IS NULL and IS NOT NULL are the correct NULL comparisons.'},
  {s:'SQL',q:'What is a clustered index?',o:['Index stored separately from the table','Index that physically reorders table data','Index with duplicate values','Index on multiple columns'],a:1,e:'A clustered index determines the physical storage order of rows.'},
  {s:'SQL',q:'How many clustered indexes can a table have?',o:['Unlimited','2','1','Depends on DBMS'],a:2,e:'A table can only be physically ordered in one way.'},
  {s:'SQL',q:'What does the SQL CASE statement do?',o:['Loops through rows','Creates conditional logic within a query','Defines a table','Creates a procedure'],a:1,e:'CASE provides SQL if/then/else style branching.'},
  {s:'SQL',q:'What is referential integrity?',o:['Ensuring primary keys are unique','Ensuring foreign keys reference valid parent keys','Encrypting relationships','Normalizing data'],a:1,e:'Referential integrity keeps foreign-key relationships valid.'},
  {s:'SQL',q:'Which SQL function extracts a substring from a string?',o:['SUBSTR() / SUBSTRING()','SLICE()','CUT()','PART()'],a:0,e:'SUBSTRING or SUBSTR extracts a portion of a string.'},

  {s:'OS',q:'What is the primary function of an operating system?',o:['Compile source code','Manage hardware resources and provide services to applications','Design user interfaces','Encrypt user data'],a:1,e:'The OS acts as an intermediary between hardware and application software.'},
  {s:'OS',q:'Which scheduling algorithm allocates CPU to the process that arrives first?',o:['SJF','Round Robin','FCFS','Priority'],a:2,e:'First Come First Served (FCFS) is the simplest scheduling algorithm.'},
  {s:'OS',q:'What is a process in an operating system?',o:['A program stored on disk','A program in execution','A CPU instruction','A file system entry'],a:1,e:'A process is an instance of a program currently being executed with its own memory space.'},
  {s:'OS',q:'What is the difference between a process and a thread?',o:['No difference','Processes share memory; threads do not','Threads share the address space within a process; processes have separate address spaces','Threads are heavier than processes'],a:2,e:'Threads share code/data/heap within a process but have separate stacks and registers.'},
  {s:'OS',q:'Which algorithm can lead to starvation?',o:['FCFS','Round Robin','SJF','None of above'],a:2,e:'SJF can cause long processes to wait indefinitely if short jobs keep arriving.'},
  {s:'OS',q:'What is a deadlock?',o:['A very fast process','A situation where processes wait indefinitely for each other’s resources','Memory overflow','CPU thrashing'],a:1,e:'Deadlock occurs when processes are blocked, each waiting for resources held by another.'},
  {s:'OS',q:'Which of the following is NOT a necessary condition for deadlock?',o:['Mutual exclusion','Hold and wait','Preemption','Circular wait'],a:2,e:'The necessary Coffman condition is no preemption, not preemption.'},
  {s:'OS',q:'What is virtual memory?',o:['RAM on the motherboard','A technique allowing processes to use more memory than is physically present by using disk','Cache memory','GPU memory'],a:1,e:'Virtual memory extends usable address space with disk-backed pages.'},
  {s:'OS',q:'Which page replacement algorithm replaces the page not used for the longest time in the future?',o:['FIFO','LRU','Optimal','LFU'],a:2,e:'The optimal algorithm chooses the page whose next use is farthest away.'},
  {s:'OS',q:'What is thrashing in operating systems?',o:['CPU overheating','Excessive paging causing severe slowdown','Disk fragmentation','Buffer overflow'],a:1,e:'Thrashing means the system spends too much time swapping pages and too little doing useful work.'},
  {s:'OS',q:'What does PCB stand for?',o:['Process Control Block','Program Counter Base','Processor Cache Buffer','Primary Control Bus'],a:0,e:'PCB stores all important execution and management information for a process.'},
  {s:'OS',q:'What is a semaphore?',o:['A network protocol','A synchronization primitive to control access to shared resources','A type of memory','A scheduling algorithm'],a:1,e:'Semaphores are used for signaling and mutual exclusion.'},
  {s:'OS',q:'Which system call creates a new process in UNIX?',o:['create()','spawn()','fork()','new()'],a:2,e:'fork() duplicates the current process.'},
  {s:'OS',q:'What is a context switch?',o:['Switching between users','Saving one process state and loading another','Switching from user to kernel mode only','Changing CPU clock speed'],a:1,e:'A context switch changes which process or thread is running.'},
  {s:'OS',q:'Which memory allocation strategy allocates the smallest suitable free block?',o:['First Fit','Best Fit','Worst Fit','Next Fit'],a:1,e:'Best Fit chooses the smallest block that is still large enough.'},
  {s:'OS',q:'What is fragmentation in memory management?',o:['A type of process','Wasted memory space that cannot be effectively used','A scheduling problem','A disk error'],a:1,e:'Fragmentation can be internal or external.'},
  {s:'OS',q:'What is the purpose of a TLB?',o:['Translate programming languages','Cache recent virtual-to-physical address translations','Store program code','Buffer disk I/O'],a:1,e:'A TLB speeds up address translation by caching page-table lookups.'},
  {s:'OS',q:'Which OS scheduling algorithm is preemptive?',o:['FCFS','SJF non-preemptive','Round Robin','Priority non-preemptive'],a:2,e:'Round Robin preempts after a time quantum expires.'},
  {s:'OS',q:'What is a zombie process?',o:['A process consuming all CPU','A process that has exited but whose status has not yet been collected','A virus process','A process in deadlock'],a:1,e:'A zombie remains in the process table until its parent reaps it.'},
  {s:'OS',q:'What is mutual exclusion?',o:['Two processes running simultaneously','Only one process can access a critical section at a time','Two processes sharing memory','A deadlock condition'],a:1,e:'Mutual exclusion protects critical sections.'},
  {s:'OS',q:'Which algorithm is used by Banker\'s algorithm to avoid deadlock?',o:['Resource allocation only','Safe-state detection','Circular-wait detection','Preemption'],a:1,e:'The banker checks whether granting a request keeps the system in a safe state.'},
  {s:'OS',q:'What is the purpose of paging in OS?',o:['Divide memory into fixed-size pages/frames to avoid external fragmentation','Speed up CPU','Manage file systems','Schedule processes'],a:0,e:'Paging maps virtual pages to physical frames.'},
  {s:'OS',q:'What is a kernel?',o:['User application','The core OS component that directly manages hardware and system services','A type of process','A file system'],a:1,e:'The kernel is the privileged core of the operating system.'},
  {s:'OS',q:'What is the difference between a monolithic kernel and microkernel?',o:['No difference','Monolithic keeps most services in kernel space; microkernel keeps only minimal services there','Microkernel is always faster','Monolithic is always more secure'],a:1,e:'This is a tradeoff between performance and modularity.'},
  {s:'OS',q:'Which file allocation method is fastest for sequential access?',o:['Linked allocation','Indexed allocation','Contiguous allocation','Hash allocation'],a:2,e:'Contiguous blocks give the best sequential-read locality.'},
  {s:'OS',q:'What is spooling in OS?',o:['A type of memory','Buffering output for slow devices like printers','CPU scheduling','File compression'],a:1,e:'Spooling lets processes continue while device I/O is staged.'},
  {s:'OS',q:'What is the critical section problem?',o:['A hardware fault','Ensuring mutually exclusive access to shared resources','A disk scheduling issue','A network problem'],a:1,e:'The critical section problem is about safe concurrent access to shared data.'},
  {s:'OS',q:'What does the fork() system call return in the parent process?',o:['0','PID of the child process','-1','1'],a:1,e:'The parent receives the child PID; the child receives 0.'},
  {s:'OS',q:'What is a race condition?',o:['CPU overclocking','Incorrect behavior caused by unsynchronized concurrent access','Disk scheduling','Memory paging'],a:1,e:'The result depends on the timing of concurrent operations.'},
  {s:'OS',q:'Which scheduling algorithm has the minimum average waiting time for a given set of processes?',o:['FCFS','Round Robin','SJF','Priority'],a:2,e:'SJF is optimal for average waiting time when burst lengths are known.'},
  {s:'OS',q:'What is an interrupt in OS?',o:['A system call','A signal to the CPU that an event needs attention','A type of process','A scheduling algorithm'],a:1,e:'Interrupts let hardware or software events pause normal execution for service.'},
  {s:'OS',q:'What is demand paging?',o:['Loading all pages at startup','Loading a page only when it is actually needed','Pre-loading all files','A disk scheduling policy'],a:1,e:'Demand paging delays loading until first access.'},
  {s:'OS',q:'What is a page fault?',o:['A syntax error','An event when a process accesses a page not currently in RAM','A disk failure','A segmentation fault'],a:1,e:'The missing page must be loaded into memory.'},
  {s:'OS',q:'Which of the following is an example of a preemptive scheduling algorithm?',o:['FCFS','Non-preemptive SJF','SRTF','None'],a:2,e:'Shortest Remaining Time First can preempt when a shorter job arrives.'},
  {s:'OS',q:'What does "I/O bound process" mean?',o:['Uses a lot of CPU','Spends more time waiting on I/O than computing','Has high memory usage','Has many threads'],a:1,e:'I/O-bound processes are limited mainly by device wait time.'},
  {s:'OS',q:'What is a pipe in UNIX?',o:['A network cable','An IPC mechanism that connects one process output to another process input','A file type','A CPU register'],a:1,e:'Pipes enable simple unidirectional process communication.'},
  {s:'OS',q:'Which signal in UNIX terminates a process forcefully?',o:['SIGINT','SIGKILL','SIGSTOP','SIGALRM'],a:1,e:'SIGKILL cannot be caught or ignored.'},
  {s:'OS',q:'What is the working set model?',o:['The set of all processes','The set of pages a process is actively using in a recent time window','A page replacement algorithm','A CPU scheduling model'],a:1,e:'The working set helps reason about memory needs and thrashing.'},
  {s:'OS',q:'What is a system call?',o:['A function call in user code','A request from user code to the kernel for a service','A hardware interrupt','A network request'],a:1,e:'System calls are the controlled entry points into kernel functionality.'},
  {s:'OS',q:'What is the difference between user mode and kernel mode?',o:['No difference','User mode is restricted; kernel mode has full hardware privileges','Kernel mode is slower','User mode allows direct hardware access'],a:1,e:'Protection between the two modes keeps the system safe and stable.'},
  {s:'OS',q:'What is aging in OS scheduling?',o:['Increasing waiting process priority over time to prevent starvation','A clock-based scheduling method','Removing old processes','CPU cooling'],a:0,e:'Aging prevents low-priority processes from waiting forever.'},
  {s:'OS',q:'What is the purpose of the page table?',o:['Store file paths','Map virtual pages to physical frames','Store process info','Cache recent instructions'],a:1,e:'The page table is the main virtual-memory translation structure.'},
  {s:'OS',q:'Which memory management technique eliminates external fragmentation?',o:['Contiguous allocation','Segmentation','Paging','Compaction'],a:2,e:'Fixed-size frames avoid the holes that cause external fragmentation.'},
  {s:'OS',q:'What is a socket in OS?',o:['A power outlet','An endpoint for bidirectional interprocess/network communication','A CPU component','A file descriptor only'],a:1,e:'Sockets are the fundamental abstraction for network communication.'},
  {s:'OS',q:'What is preemptive scheduling?',o:['Processes run to completion without interruption','The OS can interrupt a running process and switch the CPU to another','Processes are assigned priorities only','FCFS scheduling'],a:1,e:'Preemption lets the scheduler reclaim the CPU when needed.'},
  {s:'OS',q:'What is the purpose of a file descriptor?',o:['An encryption key','An integer handle representing an open file or stream','A pointer to RAM','A process ID'],a:1,e:'UNIX-like systems identify open I/O objects with file descriptors.'},
  {s:'OS',q:'What is segmentation in OS?',o:['Dividing memory into fixed frames','Dividing memory into variable-size logical segments','Disk partitioning','CPU partitioning'],a:1,e:'Segments usually correspond to logical regions like code, data, and stack.'},
  {s:'OS',q:'What is a mutex?',o:['A type of process','A lock used for mutual exclusion','A scheduling algorithm','A network protocol'],a:1,e:'A mutex ensures only one thread owns the lock at a time.'},
  {s:'OS',q:'What causes thrashing?',o:['Too many I/O operations','Too much CPU usage','Insufficient RAM leading to excessive page swapping','Too many processes only'],a:2,e:'When the working sets do not fit in RAM, the system may thrash.'},
  {s:'OS',q:'What does the exec() system call do?',o:['Creates a new process','Replaces the current process image with a new program','Terminates a process','Suspends a process'],a:1,e:'exec swaps the current code/data image for a different program.'},
  {s:'OS',q:'What is the role of the MMU?',o:['Manage files','Translate virtual addresses to physical addresses','Schedule processes','Manage network connections'],a:1,e:'The MMU performs address translation in hardware.'},
  {s:'OS',q:'Which IPC mechanism allows communication between unrelated processes?',o:['Pipes','Named pipes (FIFOs)','Shared memory only','Message passing only'],a:1,e:'Named pipes can be opened by unrelated processes using the filesystem name.'},
  {s:'OS',q:'What is a swap space?',o:['Extra RAM','Disk space used as an extension of RAM','CPU cache','Network buffer'],a:1,e:'Swap stores pages that are evicted from physical memory.'},
  {s:'OS',q:'What is turnaround time?',o:['Time from submission to completion','Time spent waiting in ready queue','Time spent on CPU','Time for an I/O operation'],a:0,e:'Turnaround time measures the total lifetime of a job from arrival to finish.'},
  {s:'OS',q:'In Round Robin scheduling, what is a time quantum?',o:['Total execution time','The fixed time slice each process gets before preemption','Average waiting time','Process priority'],a:1,e:'The quantum defines how long a process may run before the scheduler rotates.'},
  {s:'OS',q:'What is a directory in a file system?',o:['A type of executable','A container that holds files and subdirectories','A type of process','A kernel module'],a:1,e:'Directories organize filesystem entries hierarchically.'},
  {s:'OS',q:'What is copy-on-write (COW)?',o:['Making a backup','Deferring copying until a shared page is modified','A disk write policy','A caching strategy'],a:1,e:'COW lets processes share pages until one of them writes.'},
  {s:'OS',q:'What is the difference between hard link and soft link?',o:['No difference','Hard link points to inode, soft link stores a pathname','Soft links work across file systems; hard links do not','Both B and C are true'],a:3,e:'Hard links reference the inode directly and cannot cross filesystems; soft links store a path.'},
  {s:'OS',q:'What does POSIX stand for?',o:['Portable Operating System Interface','Programmable OS Index','Process Operating System Interface','Primary OS Interface'],a:0,e:'POSIX is a standards family for compatible operating-system interfaces.'},

  {s:'CN',q:'What does OSI stand for?',o:['Open System Interconnection','Operating System Interface','Open Service Internet','Optical Service Implementation'],a:0,e:'OSI is the classic seven-layer reference model for networking.'},
  {s:'CN',q:'How many layers does the OSI model have?',o:['4','5','6','7'],a:3,e:'The OSI model defines seven layers.'},
  {s:'CN',q:'Which layer of the OSI model is responsible for routing?',o:['Data Link','Transport','Network','Session'],a:2,e:'Routing and logical addressing belong to the Network layer.'},
  {s:'CN',q:'What is the function of the Transport layer?',o:['Routing packets','End-to-end communication, error correction, and flow control','Physical transmission','Session management'],a:1,e:'Transport provides host-to-host delivery services like TCP and UDP.'},
  {s:'CN',q:'Which protocol provides reliable, connection-oriented data transmission?',o:['UDP','IP','TCP','ICMP'],a:2,e:'TCP is reliable and connection-oriented.'},
  {s:'CN',q:'What is the purpose of DNS?',o:['Assign IP addresses dynamically','Translate domain names to IP addresses','Encrypt data','Route packets'],a:1,e:'DNS maps hostnames to IP addresses.'},
  {s:'CN',q:'Which protocol is used to assign IP addresses automatically?',o:['FTP','DNS','DHCP','ARP'],a:2,e:'DHCP automatically leases IP configuration to clients.'},
  {s:'CN',q:'What is the default port number for HTTP?',o:['21','25','80','443'],a:2,e:'HTTP uses port 80.'},
  {s:'CN',q:'What does IP stand for?',o:['Internet Protocol','Internal Process','Interface Protocol','Internet Procedure'],a:0,e:'IP is the network-layer protocol for addressing and packet routing.'},
  {s:'CN',q:'What is the purpose of ARP?',o:['Assign IP addresses','Resolve IP addresses to MAC addresses','Route packets','Encrypt traffic'],a:1,e:'ARP finds the Layer-2 address corresponding to a local IP address.'},
  {s:'CN',q:'Which layer of the OSI model deals with MAC addresses?',o:['Physical','Data Link','Network','Transport'],a:1,e:'MAC addressing is part of the Data Link layer.'},
  {s:'CN',q:'What is a subnet mask used for?',o:['Encrypt data','Determine the network and host portions of an IP address','Assign domain names','Route packets'],a:1,e:'The subnet mask defines which address bits identify the network.'},
  {s:'CN',q:'What is the maximum segment size (MSS) related to?',o:['UDP','ICMP','TCP','ARP'],a:2,e:'MSS is a TCP negotiation value controlling payload size.'},
  {s:'CN',q:'What is the difference between TCP and UDP?',o:['No difference','TCP is connectionless; UDP is connection-oriented','TCP is reliable and ordered; UDP is faster and unreliable','UDP uses more bandwidth'],a:2,e:'TCP adds reliability and ordering, while UDP keeps overhead low.'},
  {s:'CN',q:'Which protocol is used for sending emails?',o:['FTP','SMTP','HTTP','POP3'],a:1,e:'SMTP is used for email transmission.'},
  {s:'CN',q:'What is a MAC address?',o:['A logical address assigned by OS','A unique 48-bit hardware identifier assigned to a NIC','An IP address type','A routing address'],a:1,e:'MAC addresses identify network interfaces at Layer 2.'},
  {s:'CN',q:'What is the purpose of ICMP?',o:['Transfer files','Assign IP addresses','Send error and diagnostic messages','Encrypt data'],a:2,e:'ICMP supports control messages such as ping and unreachable notices.'},
  {s:'CN',q:'What is a router?',o:['A device that connects devices on the same LAN','A device that forwards packets between different networks','A device that assigns IP addresses','A type of switch'],a:1,e:'Routers operate at Layer 3 and interconnect networks.'},
  {s:'CN',q:'What is a switch?',o:['A Layer 3 device','A device that forwards frames inside a LAN using MAC addresses','A wireless access point','A modem'],a:1,e:'Switches learn MAC addresses and forward frames selectively.'},
  {s:'CN',q:'What is the three-way handshake in TCP?',o:['SYN → ACK → FIN','SYN → SYN-ACK → ACK','ACK → SYN → FIN','CONNECT → ACCEPT → CONFIRM'],a:1,e:'TCP setup is SYN, SYN-ACK, ACK.'},
  {s:'CN',q:'What does HTTP stand for?',o:['HyperText Transfer Protocol','HyperText Transmission Procedure','Host Transfer Protocol','HyperText Transport Program'],a:0,e:'HTTP is the standard web application protocol.'},
  {s:'CN',q:'Which protocol is used by web browsers for secure communication?',o:['HTTP','FTP','HTTPS','TELNET'],a:2,e:'HTTPS is HTTP over TLS.'},
  {s:'CN',q:'What is the IPv4 address space size?',o:['32 bits (about 4.3 billion addresses)','64 bits','128 bits','16 bits'],a:0,e:'IPv4 addresses are 32 bits long.'},
  {s:'CN',q:'What is IPv6 address size?',o:['32 bits','64 bits','128 bits','256 bits'],a:2,e:'IPv6 uses 128-bit addresses.'},
  {s:'CN',q:'Which layer is responsible for end-to-end encryption (SSL/TLS) in classic OSI mapping?',o:['Network','Transport','Presentation','Application'],a:2,e:'In textbook OSI mapping, encryption/format translation sits in the Presentation layer.'},
  {s:'CN',q:'What is the default port for FTP?',o:['20 and 21','22','23','25'],a:0,e:'FTP traditionally uses 21 for control and 20 for data.'},
  {s:'CN',q:'What is a firewall?',o:['A physical barrier','A security system that filters network traffic using rules','A type of router','A network cable'],a:1,e:'Firewalls inspect and control traffic between trust boundaries.'},
  {s:'CN',q:'What is NAT?',o:['A routing protocol','Translating private IP addresses to a public IP','A DNS service','A VPN protocol'],a:1,e:'NAT lets many internal hosts share fewer public IPs.'},
  {s:'CN',q:'Which layer provides application protocols like HTTP and FTP?',o:['Transport','Network','Application','Session'],a:2,e:'User-facing network services live at the Application layer.'},
  {s:'CN',q:'What is a VPN?',o:['An encrypted virtual private network tunnel over a public network','A type of LAN','A firewall type','A routing protocol'],a:0,e:'VPNs provide secure remote connectivity.'},
  {s:'CN',q:'Which protocol is used to transfer files between computers?',o:['HTTP','SMTP','FTP','DNS'],a:2,e:'FTP is a dedicated file-transfer protocol.'},
  {s:'CN',q:'What is the purpose of the TTL field in IP?',o:['Set connection timeout','Limit packet lifetime to prevent routing loops','Encrypt the packet','Specify priority'],a:1,e:'Routers decrement TTL at each hop and discard packets that reach zero.'},
  {s:'CN',q:'What is the loopback address in IPv4?',o:['192.168.1.1','10.0.0.1','127.0.0.1','0.0.0.0'],a:2,e:'127.0.0.1 is the standard localhost loopback address.'},
  {s:'CN',q:'What is a VLAN?',o:['A type of VPN','Logical segmentation of a physical network into separate broadcast domains','A wireless network','A routing protocol'],a:1,e:'VLANs separate traffic at Layer 2 without separate physical switches.'},
  {s:'CN',q:'What protocol does the ping utility use?',o:['TCP','UDP','ICMP','ARP'],a:2,e:'Ping relies on ICMP echo request/reply messages.'},
  {s:'CN',q:'What is the purpose of SSH?',o:['Transfer files','Secure encrypted remote login and command execution','Send emails','Assign IP addresses'],a:1,e:'SSH provides encrypted shell access and remote command execution.'},
  {s:'CN',q:'What is a broadcast address?',o:['An address for one specific device','An address used to send to all devices on a network segment','An address for a group of devices','A private IP address'],a:1,e:'Broadcast traffic is delivered to every host in the broadcast domain.'},
  {s:'CN',q:'Which routing protocol is used within an autonomous system (IGP)?',o:['BGP','OSPF','RIP or OSPF','None'],a:2,e:'RIP and OSPF are common interior gateway protocols.'},
  {s:'CN',q:'What is flow control in networking?',o:['Routing packets efficiently','Preventing the sender from overwhelming the receiver','Encrypting data','Filtering traffic'],a:1,e:'Flow control matches sender rate to receiver capacity.'},
  {s:'CN',q:'What does SSL/TLS provide?',o:['Routing','Authentication, encryption, and integrity','IP addressing','Name resolution'],a:1,e:'TLS secures application traffic over untrusted networks.'},
  {s:'CN',q:'What is a packet?',o:['A complete file transfer','A formatted unit of data sent over a network','A hardware device','An OS process'],a:1,e:'Packets are the basic transferable units in packet-switched networks.'},
  {s:'CN',q:'Which device operates at the physical layer?',o:['Router','Switch','Hub','Firewall'],a:2,e:'A hub simply repeats electrical signals at Layer 1.'},
  {s:'CN',q:'What is congestion control in TCP?',o:['A security feature','Mechanisms to reduce sending rate when the network is congested','Flow control only','IP routing'],a:1,e:'TCP adjusts sending behavior to avoid overloading the network.'},
  {s:'CN',q:'What is the purpose of SNMP?',o:['Transfer files','Monitor and manage network devices','Assign IP addresses','Encrypt traffic'],a:1,e:'SNMP is a management protocol for network equipment.'},
  {s:'CN',q:'What type of network covers a small geographical area like a building?',o:['WAN','MAN','LAN','PAN'],a:2,e:'A LAN covers a local area such as a room, office, or building.'},
  {s:'CN',q:'What is WAN?',o:['Wireless Area Network','Wide Area Network covering large geographical areas','Wireless Access Node','Web Application Network'],a:1,e:'WANs span cities, countries, or the globe.'},
  {s:'CN',q:'Which topology connects every device to a central hub?',o:['Bus','Ring','Star','Mesh'],a:2,e:'A star topology uses a central connection point.'},
  {s:'CN',q:'What is the purpose of Ethernet?',o:['Wireless communication standard','A wired LAN standard for framing, signaling, and cabling','A routing protocol','An internet protocol'],a:1,e:'Ethernet is the dominant wired local-area networking standard.'},
  {s:'CN',q:'What is the difference between half-duplex and full-duplex?',o:['No difference','Half-duplex alternates send/receive, full-duplex does both simultaneously','Full-duplex is slower','Half-duplex uses encryption'],a:1,e:'Full-duplex supports simultaneous bidirectional communication.'},
  {s:'CN',q:'What port does HTTPS use?',o:['80','8080','443','22'],a:2,e:'HTTPS uses TCP port 443.'},
  {s:'CN',q:'What is a collision domain?',o:['A group of secure devices','A network segment where simultaneous transmissions can collide','A firewall zone','A VLAN'],a:1,e:'Shared-media Ethernet segments are classic collision domains.'},
  {s:'CN',q:'What does CSMA/CD stand for?',o:['Carrier Sense Multiple Access with Collision Detection','Connected Signal Multiple Access with Controlled Delivery','Centralized Switch Management Access with Control Detection','None'],a:0,e:'This is the classic shared-Ethernet media-access protocol.'},
  {s:'CN',q:'Which IP class is typically used for large networks?',o:['Class A','Class B','Class C','Class D'],a:0,e:'Class A historically supported the largest host counts.'},
  {s:'CN',q:'What is the purpose of the physical layer?',o:['Error correction','Routing','Transmitting raw bits over a medium','Addressing'],a:2,e:'The physical layer deals with signaling and transmission of bits.'},
  {s:'CN',q:'What is a proxy server?',o:['A type of router','An intermediary server between client and destination server','A firewall type','A DNS server'],a:1,e:'Proxies can filter, cache, and relay requests.'},
  {s:'CN',q:'What is Quality of Service (QoS) in networking?',o:['Encryption quality','Techniques to prioritize and manage traffic/bandwidth','DNS management','MAC addressing'],a:1,e:'QoS helps deliver better service to selected traffic classes.'},
  {s:'CN',q:'What is a port number used to identify?',o:['Physical devices','Specific applications/processes on a host','IP addresses','MAC addresses'],a:1,e:'Port numbers distinguish services using the same IP address.'},
  {s:'CN',q:'What is the purpose of OSPF?',o:['Assign IP addresses','A link-state interior gateway routing protocol','Send emails','Encrypt traffic'],a:1,e:'OSPF is a widely used intra-domain routing protocol.'},
  {s:'CN',q:'Which protocol is used for retrieving emails?',o:['SMTP','IMAP/POP3','FTP','HTTP'],a:1,e:'POP3 and IMAP are mail retrieval protocols.'},
  {s:'CN',q:'What is the function of the session layer?',o:['Routing packets','Physical transmission','Establishing and managing communication sessions','Data encryption'],a:2,e:'Session layer responsibilities include dialog control and session management.'},
  {s:'CN',q:'What is bandwidth?',o:['Network latency','The maximum data transfer rate of a connection','Number of connected devices','Packet size'],a:1,e:'Bandwidth is capacity, usually expressed in bits per second.'},
  {s:'CN',q:'What is latency?',o:['Bandwidth','The delay between sending and receiving data','Packet loss rate','Connection speed'],a:1,e:'Latency measures time delay across the network path.'},

  {s:'APT',q:'If a train travels 360 km in 4 hours, what is its speed?',o:['80 km/h','90 km/h','100 km/h','75 km/h'],a:1,e:'Speed = distance / time = 360 / 4 = 90 km/h.'},
  {s:'APT',q:'What is 15% of 200?',o:['25','30','35','20'],a:1,e:'15% of 200 is 30.'},
  {s:'APT',q:'If 6 workers can complete a job in 12 days, how many days will 9 workers take?',o:['6','8','9','10'],a:1,e:'Total work is 72 worker-days, so 9 workers need 8 days.'},
  {s:'APT',q:'What is the next number in the series: 2, 6, 12, 20, 30, ?',o:['40','42','44','46'],a:1,e:'The differences are 4, 6, 8, 10, so the next difference is 12.'},
  {s:'APT',q:'A person buys an article for ₹500 and sells it for ₹600. What is the profit percentage?',o:['15%','20%','25%','10%'],a:1,e:'Profit is 100, so profit% = 100/500 × 100 = 20%.'},
  {s:'APT',q:'If A is 3 times as old as B, and the sum of their ages is 48, how old is B?',o:['10','12','14','16'],a:1,e:'Let B = x, then 3x + x = 48, so x = 12.'},
  {s:'APT',q:'What is the LCM of 12 and 18?',o:['24','36','48','72'],a:1,e:'LCM(12,18) = 36.'},
  {s:'APT',q:'A car travels at 60 km/h. How long does it take to travel 180 km?',o:['2 hours','3 hours','4 hours','2.5 hours'],a:1,e:'Time = distance/speed = 180/60 = 3 hours.'},
  {s:'APT',q:'What is 2⁸?',o:['128','256','512','64'],a:1,e:'2 raised to the 8th power is 256.'},
  {s:'APT',q:'The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?',o:['15','20','25','18'],a:1,e:'If 3 parts = 30, then 1 part = 10 and girls = 20.'},
  {s:'APT',q:'Find the HCF of 24 and 36.',o:['6','8','12','18'],a:2,e:'The highest common factor is 12.'},
  {s:'APT',q:'If the simple interest on ₹1000 for 2 years at 5% per annum is?',o:['₹50','₹100','₹150','₹200'],a:1,e:'SI = PRT/100 = 1000*5*2/100 = ₹100.'},
  {s:'APT',q:'What is 20% of 250?',o:['40','50','60','45'],a:1,e:'20% of 250 is 50.'},
  {s:'APT',q:'In a class of 40 students, 60% are girls. How many boys are in the class?',o:['16','20','24','18'],a:0,e:'60% of 40 is 24 girls, leaving 16 boys.'},
  {s:'APT',q:'Find the missing number: 1, 1, 2, 3, 5, 8, ?',o:['11','12','13','14'],a:2,e:'This is Fibonacci, so the next term is 13.'},
  {s:'APT',q:'A shopkeeper marks goods at 25% above cost and allows a 10% discount. Find the profit %.',o:['10.5%','12.5%','15%','11.25%'],a:1,e:'1.25 × 0.9 = 1.125, so the effective profit is 12.5%.'},
  {s:'APT',q:'If 2x + 3 = 11, what is x?',o:['3','4','5','6'],a:1,e:'2x = 8, so x = 4.'},
  {s:'APT',q:'What is the area of a circle with radius 7 cm? (Use π = 22/7)',o:['154 cm²','144 cm²','132 cm²','164 cm²'],a:0,e:'Area = πr² = 22/7 × 49 = 154 cm².'},
  {s:'APT',q:'Two pipes A and B can fill a tank in 6 hours and 4 hours respectively. How long together?',o:['2.4 hours','2 hours','3 hours','2.8 hours'],a:0,e:'Combined rate is 1/6 + 1/4 = 5/12 tank per hour, so time is 12/5 hours.'},
  {s:'APT',q:'What is the compound interest on ₹1000 at 10% per annum for 2 years?',o:['₹200','₹210','₹220','₹250'],a:1,e:'Amount becomes 1210, so compound interest is ₹210.'},
  {s:'APT',q:'A is 40% more than B. B is what percentage less than A?',o:['28.57%','40%','25%','30%'],a:0,e:'If B=100 and A=140, then B is 40/140 less than A, or about 28.57%.'},
  {s:'APT',q:'What is the square root of 144?',o:['11','12','13','14'],a:1,e:'12 × 12 = 144.'},
  {s:'APT',q:'In how many ways can 4 people sit in a row?',o:['12','24','48','16'],a:1,e:'The number of permutations is 4! = 24.'},
  {s:'APT',q:'If the price of a product increases by 20% and then decreases by 20%, the net change is?',o:['0%','−4%','+4%','−2%'],a:1,e:'1.2 × 0.8 = 0.96, so the overall result is a 4% decrease.'},
  {s:'APT',q:'A dice is thrown once. What is the probability of getting a number greater than 4?',o:['1/3','1/6','1/2','2/3'],a:0,e:'Numbers greater than 4 are 5 and 6, so probability is 2/6 = 1/3.'},
  {s:'APT',q:'What is the perimeter of a rectangle with length 8 cm and breadth 5 cm?',o:['26 cm','26 cm²','40 cm','13 cm'],a:0,e:'Perimeter is 2(l+b) = 26 cm.'},
  {s:'APT',q:'The average of 5 numbers is 20. If one number is removed, the average becomes 18. What is the removed number?',o:['24','26','28','30'],a:2,e:'Total changes from 100 to 72, so the removed number is 28.'},
  {s:'APT',q:'A sum triples in 10 years at simple interest. What is the rate per annum?',o:['15%','20%','25%','30%'],a:1,e:'Tripling means interest = 2P over 10 years, so rate is 20%.'},
  {s:'APT',q:'What is the next term: 3, 9, 27, 81, ?',o:['162','243','324','729'],a:1,e:'Each term is multiplied by 3.'},
  {s:'APT',q:'If a:b = 2:3 and b:c = 4:5, find a:c.',o:['8:15','2:5','4:9','6:10'],a:0,e:'Matching b gives a:b:c = 8:12:15, so a:c = 8:15.'},
  {s:'APT',q:'A man walks at 5 km/h for 2 hours and then at 4 km/h for 3 hours. What is the average speed?',o:['4.4 km/h','4.5 km/h','4.2 km/h','5 km/h'],a:0,e:'Total distance is 22 km in 5 hours, so average speed is 4.4 km/h.'},
  {s:'APT',q:'What is 6³?',o:['108','216','196','144'],a:1,e:'6×6×6 = 216.'},
  {s:'APT',q:'If APPLE = 1, ORANGE = 2, what does it suggest?',o:['Alphabetical order','Number of letters','Some code pattern','Vowel count'],a:1,e:'The intended idea is counting letters: APPLE has 5 and ORANGE has 6.'},
  {s:'APT',q:'If 5 men can do a piece of work in 8 days, how many men are needed to complete the same work in 4 days?',o:['8','10','12','15'],a:1,e:'Work is constant, so men × days = 40, giving 10 men.'},
  {s:'APT',q:'What is 30% of 90?',o:['24','27','30','33'],a:1,e:'30% of 90 is 27.'},
  {s:'APT',q:'Two numbers are in the ratio 3:5. If their sum is 40, find the larger number.',o:['15','25','20','18'],a:1,e:'8 parts = 40, so one part is 5 and the larger number is 25.'},
  {s:'APT',q:'A clock shows 3:15. What is the angle between the hour and minute hands?',o:['0°','7.5°','15°','30°'],a:1,e:'Minute hand is at 90° and hour hand is at 97.5°, so the difference is 7.5°.'},
  {s:'APT',q:'What is the probability of drawing a queen from a standard 52-card deck?',o:['1/13','1/52','4/52','2/26'],a:0,e:'There are 4 queens in 52 cards, which simplifies to 1/13.'},
  {s:'APT',q:'Find the value of: 1 + 2 + 3 + ... + 100',o:['5000','5050','4950','5100'],a:1,e:'Use n(n+1)/2 with n=100 to get 5050.'},
  {s:'APT',q:'A 120-meter long train passes a pole in 12 seconds. What is its speed in km/h?',o:['30 km/h','36 km/h','40 km/h','45 km/h'],a:1,e:'Speed is 120/12 = 10 m/s, which is 36 km/h.'},
  {s:'APT',q:'What is 5! (5 factorial)?',o:['25','100','120','60'],a:2,e:'5! = 5×4×3×2×1 = 120.'},
  {s:'APT',q:'If today is Wednesday, what day will it be after 100 days?',o:['Sunday','Monday','Friday','Saturday'],a:2,e:'100 mod 7 = 2, so two days after Wednesday is Friday.'},
  {s:'APT',q:'The product of two numbers is 120 and their sum is 23. Find the two numbers.',o:['10 and 13','8 and 15','12 and 11','9 and 14'],a:1,e:'8 × 15 = 120 and 8 + 15 = 23.'},
  {s:'APT',q:'What is 0.25 as a fraction in lowest terms?',o:['2/5','1/4','3/8','1/5'],a:1,e:'0.25 = 25/100 = 1/4.'},
  {s:'APT',q:'A bag contains 3 red, 4 blue, and 5 green balls. What is the probability of drawing a blue ball?',o:['1/3','4/12','1/4','2/6'],a:0,e:'There are 4 blue balls out of 12 total, which simplifies to 1/3.'},
  {s:'APT',q:'If the diameter of a circle is 14 cm, what is its circumference? (π = 22/7)',o:['44 cm','22 cm','88 cm','66 cm'],a:0,e:'Circumference = πd = 22/7 × 14 = 44 cm.'},
  {s:'APT',q:'If A can do a job in 10 days and B can do it in 15 days, together in how many days?',o:['5 days','6 days','8 days','9 days'],a:1,e:'Combined rate is 1/10 + 1/15 = 1/6 of the work per day.'},
  {s:'APT',q:'What is 75% expressed as a decimal?',o:['0.075','7.5','0.75','75'],a:2,e:'75% = 75/100 = 0.75.'},
  {s:'APT',q:'A number when divided by 5 gives remainder 3. The number is:',o:['18','23','20','25'],a:1,e:'23 leaves remainder 3 when divided by 5.'},
  {s:'APT',q:'If 3x − 7 = 14, find x.',o:['5','6','7','8'],a:2,e:'3x = 21, so x = 7.'},
  {s:'APT',q:'What comes next: ACE, BDF, CEG, ?',o:['DFH','EGI','DGI','CFH'],a:0,e:'Each position advances by one letter in the alphabet.'},
  {s:'APT',q:'In a 100m race, A beats B by 10m. If B takes 10 seconds, what is A\'s speed?',o:['10 m/s','9 m/s','11 m/s','12 m/s'],a:2,e:'When A runs 100 m, B runs 90 m. Since B runs 100 m in 10 s, A\'s speed is 100 ÷ 9 ≈ 11.11 m/s, so 11 m/s is the closest option.'},
  {s:'APT',q:'What is the percentage change from 50 to 75?',o:['25%','50%','75%','40%'],a:1,e:'Increase is 25 on a base of 50, so the change is 50%.'},
  {s:'APT',q:'The average of three numbers is 12. If two of them are 10 and 15, find the third.',o:['9','10','11','12'],a:2,e:'Total is 36, so the third number is 36 - 10 - 15 = 11.'},
  {s:'APT',q:'How many prime numbers are there between 1 and 20?',o:['6','7','8','9'],a:2,e:'The primes are 2, 3, 5, 7, 11, 13, 17, and 19.'},
  {s:'APT',q:'A number is divisible by both 4 and 6. Which of the following must it be divisible by?',o:['8','12','24','10'],a:1,e:'The least common multiple of 4 and 6 is 12.'},
  {s:'APT',q:'What is the value of √(81) + √(16)?',o:['11','13','9','17'],a:1,e:'√81 is 9 and √16 is 4, so the sum is 13.'},
  {s:'APT',q:'A mixture of 20 liters has milk and water in ratio 3:1. How many liters of milk are there?',o:['12','15','10','18'],a:1,e:'Milk is 3/4 of 20 liters, which is 15 liters.'},
  {s:'APT',q:'If log₁₀(1000) = ?, what is the value?',o:['2','3','4','10'],a:1,e:'1000 = 10³, so log base 10 of 1000 is 3.'},
  {s:'APT',q:'What is the unit digit of 7⁴?',o:['1','7','3','9'],a:0,e:'7⁴ = 2401, so the unit digit is 1.'},
  {s:'APT',q:'In a group of 60 people, 35 read newspaper A and 25 read newspaper B, and 10 read both. How many read neither?',o:['5','10','15','20'],a:1,e:'Using inclusion-exclusion, 35 + 25 - 10 = 50 read at least one, so 10 read neither.'},
  {s:'APT',q:'What is the time taken for ₹2000 to become ₹2500 at 5% simple interest per annum?',o:['4 years','5 years','6 years','3 years'],a:1,e:'Interest is ₹500, so time = SI×100 / (P×R) = 500×100 / (2000×5) = 5 years.'}
];

window.JOSH_MASTER_SET = {
  id: 'jtm',
  label: 'JTG Master Mix',
  title: 'Josh Technology OA - Combined Master Bank',
  badge: '+2 correct / -1 wrong',
  quizNote: 'Scoring: +2 for correct answers and -1 for wrong answers. This combined bank merges both pasted apps, removes exact duplicate entries, renumbers questions cleanly, and relies on the site\'s deterministic option shuffler so correct letters do not follow a visible pattern.',
  quizMaxCount: 50,
  scoreConfig: {
    correct: 2,
    wrong: -1,
    timerSeconds: 45,
    noNegativeFlag: null
  },
  subjectColors: {
    COUT: 'c-out',
    PTR: 'ptr',
    OOP: 'oop',
    DSA: 'dsa',
    SQL: 'sql',
    OS: 'os',
    CN: 'cn',
    APT: 'apt'
  },
  subjectLabels: {
    ALL: 'All',
    COUT: 'C Output',
    PTR: 'Pointers',
    OOP: 'OOP',
    DSA: 'DSA',
    SQL: 'SQL',
    OS: 'OS',
    CN: 'Networks',
    APT: 'Aptitude'
  },
  subjectOrder: ['ALL', 'COUT', 'PTR', 'OOP', 'DSA', 'SQL', 'OS', 'CN', 'APT'],
  questions: dedupeMasterQuestions([
    ...MASTER_RAW_PRIMARY,
    ...MASTER_RAW_SECONDARY
  ])
};
