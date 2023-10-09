#include <iostream>
#include <vector>
using namespace std;
int main() {
  // Create a vector of integers
  vector<int> numbers = {1, 2, 3, 4, 5};
  // Print the original vector
  cout << "Original vector: ";
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
