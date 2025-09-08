function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== "number") {
      throw new Error("Invalid input. Please provide an array of numbers.");
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 80) {
      predicate = "A";
    } else if (grade >= 70) {
      predicate = "B";
    } else if (grade >= 60) {
      predicate = "C";
    } else if (grade >= 50) {
      predicate = "D";
    } else {
      predicate = "E";
    }

    console.log(`Nilai ${grade} memiliki predikat ${predicate}`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70, "80"];
  checkGrades(studentGrades);
} catch (e) {
  console.log(e.message);
}
