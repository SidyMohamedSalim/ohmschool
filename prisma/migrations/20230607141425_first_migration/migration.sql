-- CreateTable
CREATE TABLE "School" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "phoneNumber" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "principalName" TEXT NOT NULL
);
-- CreateTable
CREATE TABLE "Direction" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "idschool" TEXT NOT NULL,
  CONSTRAINT "Direction_idschool_fkey" FOREIGN KEY ("idschool") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "AdminSchool" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "idDirection" TEXT NOT NULL,
  CONSTRAINT "AdminSchool_idDirection_fkey" FOREIGN KEY ("idDirection") REFERENCES "Direction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "AdminSite" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "idschool" TEXT NOT NULL,
  CONSTRAINT "AdminSite_idschool_fkey" FOREIGN KEY ("idschool") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "Teacher" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "dateOfBirth" DATETIME NOT NULL,
  "address" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "qualifications" TEXT NOT NULL,
  "hireDate" DATETIME NOT NULL
);
-- CreateTable
CREATE TABLE "Student" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "dateOfBirth" DATETIME NOT NULL,
  "address" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "parentGuardianContact" TEXT NOT NULL,
  "enrollmentDate" DATETIME NOT NULL,
  "gradeLevel" TEXT NOT NULL,
  "classId" TEXT,
  "parentGuardianId" TEXT,
  CONSTRAINT "Student_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE
  SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Student_parentGuardianId_fkey" FOREIGN KEY ("parentGuardianId") REFERENCES "ParentGuardian" ("id") ON DELETE
  SET NULL ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "Course" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "creditHours" TEXT NOT NULL,
  "gradeLevel" TEXT NOT NULL
);
-- CreateTable
CREATE TABLE "Class" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "gradeLevel" TEXT NOT NULL,
  "section" TEXT NOT NULL,
  "year" TEXT NOT NULL,
  "teacherId" TEXT NOT NULL,
  CONSTRAINT "Class_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "Exam" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "date" DATETIME NOT NULL,
  "description" TEXT NOT NULL,
  "courseId" TEXT NOT NULL,
  "classId" TEXT NOT NULL,
  CONSTRAINT "Exam_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "Exam_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "Note" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "score" REAL NOT NULL,
  "year" DATETIME NOT NULL,
  "grade" TEXT NOT NULL,
  "courseId" TEXT NOT NULL,
  "studentId" TEXT NOT NULL,
  "examId" TEXT NOT NULL,
  CONSTRAINT "Note_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "Note_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT "Note_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "Degree" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "year" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "studentId" TEXT NOT NULL,
  CONSTRAINT "Degree_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
-- CreateTable
CREATE TABLE "ParentGuardian" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "relationshipToStudent" TEXT NOT NULL
);
-- CreateTable
CREATE TABLE "Event" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "startDate" DATETIME NOT NULL,
  "endDate" DATETIME NOT NULL,
  "location" TEXT NOT NULL
);
-- CreateTable
CREATE TABLE "Subject" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "content" TEXT NOT NULL
);
-- CreateTable
CREATE TABLE "_ExamToStudent" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_ExamToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Exam" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_ExamToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
-- CreateIndex
CREATE UNIQUE INDEX "Note_examId_id_studentId_courseId_key" ON "Note"("examId", "id", "studentId", "courseId");
-- CreateIndex
CREATE UNIQUE INDEX "_ExamToStudent_AB_unique" ON "_ExamToStudent"("A", "B");
-- CreateIndex
CREATE INDEX "_ExamToStudent_B_index" ON "_ExamToStudent"("B");
