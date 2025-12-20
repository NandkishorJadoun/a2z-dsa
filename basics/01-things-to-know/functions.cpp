#include <bits/stdc++.h>
using namespace std;

int sum(int x, int y)
{
    int z = x + y;
    return z;
}

int main()
{
    int x, y;
    cin >> x >> y;
    int result = sum(x, y);
    cout << result;
    return 0;
}


/* Use `&` in function param if you want to mutate the original value (since array mutates the original value, we dont need to use `&` for it) :
int/void doSomething(int &num){...} */