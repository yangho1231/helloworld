require 'rubocop/rake_task'
desc 'Run RuboCop on the lib directory'
task :rubocop do
  RuboCop::RakeTask.new
end