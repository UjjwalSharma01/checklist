#include<iostream>
#include<vector>
using namespace std;
int main() {
  vector<int> numbers = {1, 2, 3, 4, 5};// Create a vector of integers
  cout << "Original vector: ";  // Print the original vector
  for (int i = 0; i < numbers.size(); i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;
  // Reverse the vector
  reverse(numbers.begin(), numbers.end());
  // Print the reversed vector
  cout << "Reversed vector: ";
  for (int i = 0; i < numbers.size(); i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;
  return 0;
}
