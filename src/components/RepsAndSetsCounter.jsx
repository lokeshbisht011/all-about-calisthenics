'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { ScrollArea } from "@/components/ui/Scroll-area"
import { Plus, X, Edit, Trash } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function ExerciseTracker() {
  const [isExercising, setIsExercising] = useState(false)
  const [exerciseName, setExerciseName] = useState('')
  const [targetReps, setTargetReps] = useState(0)
  const [sets, setSets] = useState([])
  const [history, setHistory] = useState([])
  const [editingExercise, setEditingExercise] = useState(null)

  useEffect(() => {
    const savedExercise = localStorage.getItem('currentExercise')
    if (savedExercise) {
      const { name, targetReps, sets } = JSON.parse(savedExercise)
      setExerciseName(name)
      setTargetReps(targetReps)
      setSets(sets)
      setIsExercising(true)
    }

    const savedHistory = localStorage.getItem('exerciseHistory')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  useEffect(() => {
    if (isExercising) {
      localStorage.setItem('currentExercise', JSON.stringify({ name: exerciseName, targetReps, sets }))
    } else {
      localStorage.removeItem('currentExercise')
    }
  }, [isExercising, exerciseName, targetReps, sets])

  const totalReps = sets.reduce((sum, set) => sum + (set.reps || 0), 0)
  const remainingReps = Math.max(0, targetReps - totalReps)

  const handleStartExercise = () => {
    setIsExercising(true)
    setSets([])
    setExerciseName('')
    setTargetReps(0)
  }

  const handleAddSet = () => {
    setSets([...sets, { id: Date.now(), reps: 0 }])
  }

  const handleUpdateSet = (id, reps) => {
    setSets(sets.map(set =>
      set.id === id ? { ...set, reps: Math.max(0, reps) } : set
    ))
  }

  const handleRemoveSet = (id) => {
    setSets(sets.filter(set => set.id !== id))
  }

  const handleFinishExercise = () => {
    if (exerciseName && sets.length > 0) {
      const exercise = {
        id: Date.now(),
        name: exerciseName,
        targetReps,
        sets,
        timestamp: new Date().toISOString()
      }
      const updatedHistory = [exercise, ...history]
      setHistory(updatedHistory)
      localStorage.setItem('exerciseHistory', JSON.stringify(updatedHistory))
      setIsExercising(false)
    }
  }

  const handleEditExercise = (exercise) => {
    setEditingExercise(exercise)
    setExerciseName(exercise.name)
    setTargetReps(exercise.targetReps)
    setSets(exercise.sets)
    setIsExercising(true)
  }

  const handleUpdateExercise = () => {
    const updatedExercise = {
      ...editingExercise,
      name: exerciseName,
      targetReps,
      sets,
    }
    const updatedHistory = history.map(ex =>
      ex.id === updatedExercise.id ? updatedExercise : ex
    )
    setHistory(updatedHistory)
    localStorage.setItem('exerciseHistory', JSON.stringify(updatedHistory))
    setEditingExercise(null)
    setIsExercising(false)
  }

  const handleDeleteExercise = (id) => {
    const updatedHistory = history.filter(ex => ex.id !== id)
    setHistory(updatedHistory)
    localStorage.setItem('exerciseHistory', JSON.stringify(updatedHistory))
  }

  return (
    <div className="container max-w-2xl mx-auto p-4 space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Reps And Sets Counter</h1>
        <p className="text-xl text-muted-foreground">Easily track your workout progress and stay motivated!</p>
      </section>

      {!isExercising ? (
        <div className="space-y-4">
          <Button onClick={handleStartExercise} className="w-full">
            Start Exercise
          </Button>

          {history.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>History</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    {history.map((exercise) => (
                      <Sheet key={exercise.id}>
                        <SheetTrigger asChild>
                          <Card className="cursor-pointer hover:bg-accent transition-colors">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">{exercise.name}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {new Date(exercise.timestamp).toLocaleDateString()} at{" "}
                                    {new Date(exercise.timestamp).toLocaleTimeString()}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">
                                    {exercise.sets.reduce((sum, set) => sum + set.reps, 0)} total reps
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {exercise.sets.length} sets
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>{exercise.name}</SheetTitle>
                            <SheetDescription>
                              {new Date(exercise.timestamp).toLocaleString()}
                            </SheetDescription>
                          </SheetHeader>
                          <div className="mt-4 space-y-4">
                            <h4 className="font-medium">Sets:</h4>
                            {exercise.sets.map((set, index) => (
                              <div key={set.id} className="flex justify-between items-center">
                                <span>Set {index + 1}</span>
                                <span className="font-medium">{set.reps} reps</span>
                              </div>
                            ))}
                            <div className="pt-4 border-t">
                              <div className="flex justify-between items-center">
                                <span>Total Reps:</span>
                                <span className="font-medium">
                                  {exercise.sets.reduce((sum, set) => sum + set.reps, 0)}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-6 space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditExercise(exercise)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                  <Trash className="h-4 w-4 mr-2" />
                                  Delete
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your exercise record.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDeleteExercise(exercise.id)}>
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </SheetContent>
                      </Sheet>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Exercise Name</label>
              <Input
                placeholder="Enter exercise name"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Target Reps (Optional)</label>
              <Input
                type="number"
                placeholder="Enter target reps"
                value={targetReps || ''}
                onChange={(e) => setTargetReps(parseInt(e.target.value) || 0)}
              />
            </div>

            {sets.length > 0 && (
              <div className="space-y-3">
                <div className="text-sm font-medium">Sets</div>
                {sets.map((set) => (
                  <div key={set.id} className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Number of reps"
                      value={set.reps || ''}
                      onChange={(e) => handleUpdateSet(set.id, parseInt(e.target.value) || 0)}
                      className="w-24"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveSet(set.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            <Button onClick={handleAddSet} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Set
            </Button>

            {sets.length > 0 && (
              <div className="pt-4 space-y-2 border-t">
                <div className="flex justify-between text-sm">
                  <span>Total Sets:</span>
                  <span className="font-medium">{sets.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Reps:</span>
                  <span className="font-medium">{totalReps}</span>
                </div>
                {targetReps > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Remaining Reps:</span>
                    <span className="font-medium">{remainingReps}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2 pt-4">
              {editingExercise ? (
                <Button onClick={handleUpdateExercise} className="flex-1" disabled={!exerciseName || sets.length === 0}>
                  Update Exercise
                </Button>
              ) : (
                <Button onClick={handleFinishExercise} className="flex-1" disabled={!exerciseName || sets.length === 0}>
                  Finish Exercise
                </Button>
              )}
              <Button onClick={() => {
                setIsExercising(false)
                setEditingExercise(null)
              }} variant="outline">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}