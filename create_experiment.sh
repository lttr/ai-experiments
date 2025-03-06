#!/bin/bash

# Script to scaffold a new AI experiment
# Usage: ./create_experiment.sh experiment_name

# Check if experiment name is provided
if [ $# -eq 0 ]; then
    echo "Error: Please provide an experiment name"
    echo "Usage: ./create_experiment.sh experiment_name"
    exit 1
fi

EXPERIMENT_NAME=$1
EXPERIMENT_DIR="experiments/$EXPERIMENT_NAME"

# Check if experiment already exists
if [ -d "$EXPERIMENT_DIR" ]; then
    echo "Error: Experiment '$EXPERIMENT_NAME' already exists"
    exit 1
fi

# Create experiment directory structure
echo "Creating experiment: $EXPERIMENT_NAME"
mkdir -p "$EXPERIMENT_DIR/start"
mkdir -p "$EXPERIMENT_DIR/end"

# Create README.md with template content
cat > "$EXPERIMENT_DIR/README.md" << EOL
# AI Experiment: $EXPERIMENT_NAME

## Purpose

Describe the purpose of this experiment.

## Challenges

Outline the challenges faced during this experiment.

## Task

What is the specific task to be done.

## Approach

How one can approach this task with AI tools.

### Prompt

An example prompt or AI tool input.
EOL

echo "Successfully created experiment: $EXPERIMENT_NAME"
echo "Directory structure:"
echo "- $EXPERIMENT_DIR/"
echo "  ├── start/"
echo "  ├── end/"
echo "  └── README.md"
echo ""
echo "Don't forget to:"
echo "1. Add your initial files to the 'start/' directory"
echo "2. Complete your experiment and add final files to the 'end/' directory"
echo "3. Update the README.md with details about your experiment"
