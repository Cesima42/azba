from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .models import Intern
from .forms import InternForm

@method_decorator(login_required, name='dispatch')
class InternListView(ListView):
    model = Intern
    template_name = 'interns/intern_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = InternForm()
        return context

    def post(self, request, *args, **kwargs):
        form = InternForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('intern-list')
        else:
            return self.render_to_response({'form': form})
